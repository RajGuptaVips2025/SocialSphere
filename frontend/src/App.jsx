import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, matchPath } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { setOnlineUsers } from './features/userDetail/userDetailsSlice';
import Profile from './components/Profile/Profile';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import BottomNavigation from './components/BottomNavigation';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Explore from './components/Explore/Explore';
import ReelSection from './components/Explore/ReelSection';
import { ProfileEdit } from './components/Profile/profile-edit';
import { ChatComponent } from './components/Chat/instagram-chat';
import Dashboard from './components/Profile/user-dashboard';
import { VideoCallProvider } from './hooks/VideoCallContext';
import VideoCall from './components/Chat/VideoCall';
import Sidebar from './components/Home/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ChildApp() {
  const userDetails = useSelector((state) => state.counter.userDetails);
  const dispatch = useDispatch();
  const socketRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation(); // Access the current route

  useEffect(() => {
    if (userDetails.id) {
      const socket = io('http://localhost:5000', {
        query: { userId: userDetails.id },
      });

      socketRef.current = socket;

      socket.on('getOnlineUsers', (onlineUsers) => {
        dispatch(setOnlineUsers(onlineUsers));
      });

      socket.on('videoCallOffer', async ({ from, offer }) => {
        if (offer.type === 'offer') {
          navigate(`/call/${from}`);
        }
      });

      return () => {
        socket.disconnect();
        dispatch(setOnlineUsers([]));
      };
    }
  }, [userDetails, dispatch, navigate]);

  const hideNavbar = ['/login', '/register','/direct/inbox'].includes(location.pathname) || 
  matchPath("/profile/:username", location.pathname) ||
  matchPath("/call/:remoteUserId/", location.pathname) ||
  matchPath("/profile/:username/:reelId", location.pathname);
  

  // Define routes where the Sidebar should be visible, excluding login and register paths
  const showSidebar = ['/','/profile/:username', '/explore', '/reels', '/admindashboard']
    .some((path) => location.pathname.startsWith(path)) && !['/login', '/register','/direct/inbox'].includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      {showSidebar && <Sidebar />}
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home socketRef={socketRef} /></ProtectedRoute>} />
        <Route path="/profile/:username" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/profile/:username/:reelId" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/direct/inbox" element={<ProtectedRoute><ChatComponent socketRef={socketRef} /></ProtectedRoute>} />
        <Route path="/explore/" element={<ProtectedRoute><Explore /></ProtectedRoute>} />
        <Route path="/reels/" element={<ProtectedRoute><ReelSection /></ProtectedRoute>} />
        <Route path="/call/:remoteUserId/" element={<ProtectedRoute><VideoCall userId={userDetails?.id} socketRef={socketRef} /></ProtectedRoute>} />
        <Route path="/accounts/edit/:id" element={<ProtectedRoute><ProfileEdit /></ProtectedRoute>} />
        <Route path="/admindashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <BottomNavigation />
    </>
  );
}

function App() {
  return (
    <Router>
      <ChildApp />
      <ToastContainer />
    </Router>
  );
}

export default App;
