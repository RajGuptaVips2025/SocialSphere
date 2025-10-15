/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../ui/button';
// import { Camera, Mic, PhoneOff, Settings } from "lucide-react"
import { Camera, CameraOff, Mic, MicOff, PhoneOff, Settings } from "lucide-react"

const VideoCall = ({ userId, socketRef }) => {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerConnection = useRef(null);
  const localStreamRef = useRef(null);  // Ref to manage localStream
  const { remoteUserId } = useParams();
  const [form, setForm] = useState(null);
  const [createOffer, setCreateOffer] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isAnswer, setIsAnswer] = useState(false);
  const [showVideoCall, setshowVideoCall] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    // Ensure that the socket listeners are set up when the component mounts
    socketRef.current.on('videoCallOffer', async ({ from, offer }) => {
      console.log('Received videoCallOffer from:', offer.type);
      setCreateOffer(offer);
      setForm(from);
      if (offer.type == 'offer') {
        setIsAnswer(true);
      }
      navigate(`/call/${from}`); // Navigate to the correct call route
    });

    socketRef.current.on('videoCallAnswer', async ({ from, answer }) => {
      setshowVideoCall(true)
      console.log('Received videoCallAnswer from:', from);
      if (peerConnection.current) {
        await peerConnection.current.setRemoteDescription(new RTCSessionDescription(answer));
      }
    });

    socketRef.current.on('iceCandidate', async ({ from, candidate }) => {
      console.log('Received ICE candidate from:', from, candidate);
      if (!peerConnection.current) {
        console.error('Peer connection is not initialized');
        return;
      }
      try {
        await peerConnection.current.addIceCandidate(new RTCIceCandidate(candidate));
        console.log('ICE candidate added successfully');
      } catch (error) {
        console.error('Error adding ICE candidate:', error);
      }
    });


    socketRef.current.on('endCall', ({ from }) => {
      console.log('Call ended by user:', from);

      // Close the peer connection and stop the local stream
      if (peerConnection.current) {
        peerConnection.current.close();
        peerConnection.current = null;
      }

      // Stop local media tracks
      if (localStreamRef.current) {
        localStreamRef.current.getTracks().forEach(track => track.stop());
      }

      // Update the UI to reflect the call has ended (e.g., navigate away)
      setshowVideoCall(false); // Update the UI to hide the video call screen
      navigate('/direct/inbox'); // Optionally, navigate to another page
    });

    // Cleanup event listeners when the component unmounts
    return () => {
      socketRef.current.off('videoCallOffer');
      socketRef.current.off('videoCallAnswer');
      socketRef.current.off('iceCandidate');
      socketRef.current.off('endCall');
    };
  }, [socketRef, navigate, peerConnection, localStreamRef, remoteUserId]);

  const startCall = async () => {
    peerConnection.current = new RTCPeerConnection();

    // Get local video and audio
    // const localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    // localVideoRef.current.srcObject = localStream;
    localStreamRef.current = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    localVideoRef.current.srcObject = localStreamRef.current;

    // localStream.getTracks().forEach(track => peerConnection.current.addTrack(track, localStream));
    localStreamRef.current.getTracks().forEach(track => peerConnection.current.addTrack(track, localStreamRef.current));

    peerConnection.current.ontrack = (event) => {
      remoteVideoRef.current.srcObject = event.streams[0];
    };

    peerConnection.current.onicecandidate = (event) => {
      if (event.candidate) {
        socketRef.current.emit('iceCandidate', { to: remoteUserId, candidate: event.candidate });
      }
    };

    // Create SDP offer
    const offer = await peerConnection.current.createOffer();
    await peerConnection.current.setLocalDescription(offer);

    // Emit video call offer to backend
    socketRef.current.emit('videoCallOffer', { to: remoteUserId, offer });
  };

  const handleVideoCallOffer = async (from, offer) => {
    setshowVideoCall(true)
    peerConnection.current = new RTCPeerConnection();

    const localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    localVideoRef.current.srcObject = localStream;
    localStreamRef.current = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    localVideoRef.current.srcObject = localStreamRef.current;

    localStream.getTracks().forEach(track => peerConnection.current.addTrack(track, localStream));
    localStreamRef.current.getTracks().forEach(track => peerConnection.current.addTrack(track, localStreamRef.current));

    peerConnection.current.ontrack = (event) => {
      remoteVideoRef.current.srcObject = event.streams[0];
    };

    peerConnection.current.onicecandidate = (event) => {
      if (event.candidate) {
        socketRef.current.emit('iceCandidate', { to: from, candidate: event.candidate });
      }
    };

    await peerConnection.current.setRemoteDescription(new RTCSessionDescription(offer));

    // Create SDP answer
    const answer = await peerConnection.current.createAnswer();
    await peerConnection.current.setLocalDescription(answer);

    socketRef.current.emit('videoCallAnswer', { to: from, answer });
  };
  // Assuming you have a reference to the RTCPeerConnection object named 'peerConnection'
  const endCall = () => {
    if (peerConnection.current) {
      peerConnection.current.close();
      peerConnection.current = null;
      localStreamRef.current.getTracks().forEach(track => track.stop());
      setshowVideoCall(false);
      socketRef.current.emit('endCall', { to: remoteUserId, from: userId });
    }
    navigate('/direct/inbox');

  };

  const toggleAudio = () => {
    if (localStreamRef.current) {
      const audioTrack = localStreamRef.current.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled;  // Toggle audio track
        setIsMuted(!audioTrack.enabled);           // Update the state
      }
    }
  }

  const toggleCamera = () => {
    if (localStreamRef.current) {
      const videoTrack = localStreamRef.current.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.enabled = !videoTrack.enabled;   // Toggle video track
        setIsCameraOn(videoTrack.enabled);          // Update state
      }
    }
  }


  return (
    <>
      <div className={`${!showVideoCall ? "w-full h-full" : "hidden"} flex justify-center items-center min-h-screen bg-black p-4`}>
        <div className="flex-1 flex w-full max-w-5xl h-[65vh] gap-4 justify-center items-center">
          <div className="p-28 bg-[#1f1f1f] rounded-lg h-full flex flex-col items-center justify-center text-center">
            <h2 className="text-white text-sm font-semibold mb-2">
              Allow Instagram to use your camera and microphone so others can see and hear you
            </h2>
            <p className="text-zinc-400 text-xs mb-6">
              You can turn off your camera and mute your microphone at any time.
            </p>
            <Button variant="link" className="w-full dark:text-blue-500 font-semibold py-0 rounded">
              Use camera and microphone
            </Button>
            <Button variant="link" className="w-full dark:text-blue-500 hover:underline font-semibold py-0">
              Use microphone only
            </Button>
          </div>
          <div className="w-[40%] h-full p-6 bg-[#1f1f1f] rounded-lg flex flex-col items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-4" />
            <h3 className="text-white text-xl font-bold mb-1">Khushi Barman</h3>
            <p className="text-white text-sm mb-6">Ready to call?</p>

          \
            {isAnswer ? (
            <Button onClick={() => handleVideoCallOffer(form, createOffer)} className="dark:bg-green-500 dark:hover:bg-green-600 dark:text-white px-4 py-0 rounded-full">
              Join Call
            </Button>
         
            ) : (
            <Button onClick={startCall} className="dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white px-4 py-0 rounded-full">
              Start Call
            </Button>
            )}
          </div>
        </div>
      </div>

      <div className={`${showVideoCall ? "w-full" : "w-0 h-0"} flex justify-center items-center bg-black`}>
        <div className="w-full min-h-screen max-w-5xl aspect-video bg-zinc-800  relative overflow-hidden">
          <video className="w-full h-full object-cover" ref={remoteVideoRef} autoPlay playsInline />
          <div className="absolute top-4 right-4">
            <Button variant="ghost" size="icon" className="text-white hover:bg-zinc-700">
              <Settings className="h-6 w-6" />
            </Button>
          </div>

          <div className="absolute bottom-4 right-4 w-32 aspect-video bg-zinc-700 rounded-lg overflow-hidden">
            <video className="w-full h-full object-cover" ref={localVideoRef} autoPlay playsInline muted />
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
            <Button onClick={toggleCamera} variant="ghost" size="icon" className="bg-zinc-700 text-white rounded-full hover:bg-zinc-600">
              {isCameraOn ?
                <Camera className="h-6 w-6" />
                :
                <CameraOff className="h-6 w-6" />
              }

            </Button>
            <Button onClick={toggleAudio} variant="ghost" size="icon" className="bg-zinc-700 text-white rounded-full hover:bg-zinc-600">
              {isMuted ?
                <MicOff className="h-6 w-6" />
                :
                <Mic className="h-6 w-6" />
              }
            </Button>
            <Button onClick={endCall} variant="ghost" size="icon" className="bg-red-500 text-white rounded-full hover:bg-red-600">
              <PhoneOff className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCall;