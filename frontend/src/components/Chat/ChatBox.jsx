/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setFollowingUsers, setMessages, setSuggestedUser } from '../../features/userDetail/userDetailsSlice';
import { AiOutlineMessage } from 'react-icons/ai';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { Camera, Info, Phone, Smile, Video, X } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';
import { ReloadIcon } from '@radix-ui/react-icons';
import { Dialog, DialogTrigger, DialogContent, DialogClose, DialogHeader, DialogTitle, DialogFooter } from "../ui/dialog";
import EmojiPicker from "emoji-picker-react";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import { Input } from '../ui/input';
import { Checkbox } from '../ui/checkbox';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import api from '@/api/api';

function ChatBox() {
    let suggestedUser = useSelector((state) => state.counter.suggestedUser);
    const [groupMembers, setGroupMembers] = useState([]);
    const [isAdmin, setIsAdmin] = useState([]);

    useEffect(() => {
        const members =
            suggestedUser?.members?.map((member) => ({
                _id: member._id, // Fallback to member._id for safety
                username: member.username, // Fallback username
                profilePic: member.userId?.profilePicture || member.profilePicture, // Fallback profile picture
                role: member.role,
            })) || [];
        const adminId = members.find((item) => item.role === "admin")?._id;
        setIsAdmin(adminId);
        setGroupMembers(members);
    }, [suggestedUser]);
    const userDetails = useSelector((state) => state.counter.userDetails);
    const messages = useSelector((state) => state.counter.messages);
    const followingUsers = useSelector((state) => state.counter.followingUsers); // <-- ADD THIS LINE
    const [textMessage, setTextMessage] = useState('')
    const [file, setFile] = useState(null); // Store file
    const [filePreview, setFilePreview] = useState(null);
    const [isresOk, setIsResOk] = useState(true);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const messagesEndRef = useRef(null);
    const [selectedMedia, setSelectedMedia] = useState(null); // To track selected media
    const [isDialogOpen, setIsDialogOpen] = useState(false);  // To handle dialog state
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [selected, setSelected] = useState([]);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [isChangeGroupNameDialogOpen, setIsChangeGroupNameDialogOpen] = useState(false);
    const [isAddPeopleDialogOpen, setIsAddPeopleDialogOpen] = useState(false);
    const [newGroupName, setNewGroupName] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSave = async () => {
        if (!newGroupName.trim()) {
            alert('Group name cannot be empty.');
            return;
        }

        setLoading(true);

        try {
            const groupId = suggestedUser._id;
            await api.put(`/conversations/group/update/groupName/${groupId}`, {
                groupName: newGroupName.trim(),
            });

            setIsChangeGroupNameDialogOpen(false);
        } catch (error) {
            alert(error.response?.data?.message || 'Failed to update group name.');
        } finally {
            setLoading(false);
        }
    };

    const handleSelect = (user) => {
        if (selected.some((item) => item._id === user._id)) {
            setSelected(selected.filter((item) => item._id !== user._id));
        } else {
            setSelected([...selected, user]);
        }
    };

    const handleEmojiClick = (emojiObject) => {
        setTextMessage((prev) => prev + emojiObject.emoji); // Append the selected emoji to the message
        setShowEmojiPicker(false); // Hide the emoji picker after selection
    };

    const removeSuggestedUser = (e) => {
        e.preventDefault()
        dispatch(setSuggestedUser(null))
    }


    const handleMediaClick = (mediaUrl) => {
        setSelectedMedia(mediaUrl);
        setIsDialogOpen(true);
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];

        if (selectedFile) {
            setFile(selectedFile);
            setFilePreview(URL.createObjectURL(selectedFile)); // Generate preview URL
        }
    };

    const clearFile = () => {
        setFile(null);
        setFilePreview(null); // Clear file preview
    };


    const sendMessageHandle = async (e, reciverId) => {
        e.preventDefault();
        try {
            setIsResOk(false)

            const senderId = userDetails.id;
            // Check if textMessage and file are properly set
            if (!textMessage && !file) {
                return; // Avoid sending if no content
            }

            // Create form data to send media and message
            const formData = new FormData();
            formData.append('senderId', senderId); // Sender ID
            formData.append('textMessage', textMessage); // Text message
            if (file) {
                formData.append('media', file);  // Include file if exists
            }
            formData.append('messageType', file ? (file.type.includes('video') ? 'video' : 'image') : 'text');

            const response = suggestedUser && 'groupName' in suggestedUser ?
                await api.post(`/conversations/group/send/message/${suggestedUser?._id}`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                }) :
                await api.post(`/conversations/send/message/${reciverId}`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });

            // if (response.data.success) {
            //     dispatch(setMessages([...messages, response.data.newMessage]));
            //     setTextMessage('');
            //     setFile(null);  // Reset file input after sending
            //     setFilePreview(null);
            // }

            if (response.data.success) {
                const newMessage = response.data.newMessage;

                // 1. Update the messages in the current chat window (this is existing code)
                dispatch(setMessages([...messages, newMessage]));

                // 2. Update the conversation list for the sidebar (NEW LOGIC)
                const currentConversationId = suggestedUser._id;

                // Filter out the conversation we just updated
                const otherConversations = followingUsers.filter(convo => convo._id !== currentConversationId);

                // Create an updated version of the current conversation object with the new last message
                const updatedConversation = {
                    ...suggestedUser,
                    lastMessage: {
                        text: newMessage.messageType === 'text' ? newMessage.message : `[${newMessage.messageType.charAt(0).toUpperCase() + newMessage.messageType.slice(1)}]`,
                        createdAt: newMessage.createdAt,
                    },
                };

                // Place the updated conversation at the top of the list
                const newConversationList = [updatedConversation, ...otherConversations];

                // Dispatch the action to update the UI
                dispatch(setFollowingUsers(newConversationList));

                // 3. Reset the form fields (this is existing code)
                setTextMessage('');
                setFile(null);
                setFilePreview(null);
            }
        } catch (error) {
            console.log(error.message);
            if (error?.response && error?.response?.status === 401 || error.response?.status === 403) navigate('/login');
        }
        finally {
            setIsResOk(true)
        }
    };

    useEffect(() => {
        // Scroll to the bottom when the component mounts or when messages change
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleSearchChange = async (e) => {
        const searchQuery = e.target.value;
        setQuery(searchQuery);
        if (searchQuery) {
            try {
                const response = await api.get(`/search/users?query=${searchQuery}`);
                // console.log(response.data)
                setResults(response.data);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        } else {
            setResults([]);
        }
    };

    // Handle deselection of a user when the cross button is clicked
    const handleDeselect = (userId) => {
        setSelected((prev) => prev.filter((id) => id !== userId));
    };

    const handleAddMembers = async () => {
        if (selected.length === 0) return;

        try {
            const groupId = suggestedUser._id; // Replace with dynamic groupId
            const members = selected.map((user) => user._id);

            for (const userId of members) {
                const response = await api.put(`/conversations/group/add/member/${groupId}`, { userId });
                setGroupMembers((prevGroupMembers) => [
                    ...prevGroupMembers,
                    response.data.newUser
                ]);
            }
            setIsAddPeopleDialogOpen(false); // Close the dialog after success
            setSelected([]); // Clear the selected users
        } catch (error) {
            console.error("Failed to add members:", error);
            alert("An error occurred while adding members.");
        }
    };

    const handleRemoveMember = async (userId) => {
        try {
            const groupId = suggestedUser._id; // Ensure this is the correct group ID

            // Send request to remove member
            await api.put(`/conversations/group/remove/member/${groupId}`, {
                userId,
            });
            // Update state dynamically to remove the member from the list at runtime
            setGroupMembers((prevMembers) => {
                const updatedMembers = prevMembers.filter((member) => member._id != userId);
                return updatedMembers;
            });

        } catch (error) {
            console.error(`Failed to remove user ${userId}:`, error);
            alert(`An error occurred while removing the user with ID ${userId}.`);
        }
    };
    return (
        <>
            {suggestedUser ?
                (<div className={`flex-grow ${suggestedUser ? "w-[90vw] md:w-full" : "w-0"} flex flex-col max-h-screen bg-white dark:bg-neutral-950 dark:text-white`}>
                    <div
                        className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                            <span onClick={removeSuggestedUser} className='text-3xl inline-block md:hidden'>←</span>
                            <Avatar>
                                <AvatarImage className="object-cover object-top" src={suggestedUser?.profilePicture || 'http://localhost:5173/uploads/profilePicture.jpg'} />
                                <AvatarFallback>{suggestedUser && 'groupName' in suggestedUser ? suggestedUser?.groupName : suggestedUser?.username}</AvatarFallback>
                            </Avatar>
                            <div>
                                <Link to={`/profile/${suggestedUser?.username}`}>
                                    <p className="font-semibold text-xs md:text-sm dark:text-white">{suggestedUser && 'groupName' in suggestedUser ? suggestedUser?.groupName : suggestedUser?.username}</p>
                                </Link>
                            </div>
                        </div>
                        <div className="flex">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="ghost" size="sm" className="text-black dark:text-white hidden md:block">
                                        <Info className="h-6 w-6" />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="right" className="p-6 bg-white dark:bg-gray-900">
                                    <div className="space-y-6">
                                        <h2 className="text-xl font-bold">Details</h2>
                                        {/* Members Section */}
                                        {groupMembers.length > 0 ? (
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <div className="space-y-1">
                                                        <p className="text-sm font-medium">Change group name</p>
                                                    </div>
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => setIsChangeGroupNameDialogOpen(true)}
                                                    >
                                                        Change
                                                    </Button>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-lg font-bold">Members</h3>
                                                    <button
                                                        onClick={() => setIsAddPeopleDialogOpen(true)}
                                                        className="text-blue-500 text-sm font-medium"
                                                    >
                                                        Add people
                                                    </button>
                                                </div>
                                                <div className="space-y-3">
                                                    {groupMembers.map((member) => (
                                                        <div key={member._id} className="flex items-center justify-between">
                                                            <div className="flex items-center space-x-3">
                                                                <img
                                                                    src={member.profilePic || "/uploads/profilePicture.jpg"}
                                                                    alt="Profile"
                                                                    className="w-10 h-10 rounded-full object-cover"
                                                                />
                                                                <div>
                                                                    <p className="font-medium">{member.username}</p>
                                                                    <p className="text-sm text-gray-500">{member.role}</p>
                                                                </div>
                                                            </div>
                                                            {/* Three dots with Dropdown Menu - Visible only to the admin */}
                                                            {userDetails.id === isAdmin && member.role === "member" && (
                                                                <DropdownMenu className="cursor-pointer">
                                                                    <DropdownMenuTrigger asChild>
                                                                        <button className="text-gray-500 hover:text-gray-700">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                fill="none"
                                                                                viewBox="0 0 24 24"
                                                                                strokeWidth="1.5"
                                                                                stroke="currentColor"
                                                                                className="w-6 h-6"
                                                                            >
                                                                                <path
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    d="M12 6.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12 12a.75.75 0 100-1.5.75.75 0 000 1.5zM12 17.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                                                                />
                                                                            </svg>
                                                                        </button>
                                                                    </DropdownMenuTrigger>
                                                                    <DropdownMenuContent align="end">
                                                                        <DropdownMenuItem
                                                                            onClick={() => handleRemoveMember(member._id)}
                                                                            className="cursor-pointer hover:text-red-500"
                                                                        >
                                                                            Remove User
                                                                        </DropdownMenuItem>
                                                                    </DropdownMenuContent>
                                                                </DropdownMenu>
                                                            )}
                                                        </div>
                                                    ))}
                                                    <Button variant="ghost" className="text-red-500 w-full text-left">
                                                        Leave Chat
                                                    </Button>
                                                    <Button variant="ghost" className="text-red-500 w-full text-left">
                                                        Delete Chat
                                                    </Button>
                                                    <p className="text-xs text-gray-500">
                                                        You won&#39;t be able to send or receive messages unless someone adds you back to the chat. No one will be notified that you left the chat.
                                                    </p>
                                                </div>

                                            </div>
                                        ) : (
                                            <p className="text-sm text-gray-500">No members found.</p> // Fallback for empty members
                                        )}
                                    </div>
                                    <Dialog open={isChangeGroupNameDialogOpen} onOpenChange={setIsChangeGroupNameDialogOpen}>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>Change Group Name</DialogTitle>
                                            </DialogHeader>
                                            <input
                                                type="text"
                                                placeholder="Enter new group name"
                                                className="w-full mt-4 border border-gray-300 rounded p-2"
                                                value={newGroupName}
                                                onChange={(e) => setNewGroupName(e.target.value)}
                                            />
                                            <DialogFooter>
                                                <Button variant="outline" onClick={() => setIsChangeGroupNameDialogOpen(false)}>
                                                    Cancel
                                                </Button>
                                                <Button onClick={handleSave} disabled={loading}>
                                                    {loading ? 'Saving...' : 'Save'}
                                                </Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>


                                    {/* Add People Dialog */}
                                    <Dialog
                                        open={isAddPeopleDialogOpen}
                                        onOpenChange={setIsAddPeopleDialogOpen}
                                    >
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>Add:</DialogTitle>
                                                <div className="flex flex-wrap gap-2 mt-2">
                                                    {selected.map((user) => (
                                                        <div
                                                            key={user._id}
                                                            className="flex items-center bg-blue-100 text-blue-600 px-3 py-1 rounded-full space-x-2"
                                                        >
                                                            <span className="text-sm">{user.username}</span>
                                                            <button
                                                                className="text-blue-600 hover:text-blue-800"
                                                                onClick={() => handleDeselect(user)}
                                                            >
                                                                &times;
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>

                                                <DialogClose />
                                            </DialogHeader>
                                            <div className="space-y-4">
                                                <Input
                                                    placeholder="Search..."
                                                    value={query}
                                                    onChange={handleSearchChange}
                                                />
                                                <ScrollArea className="h-60">
                                                    <ul className="space-y-2">
                                                        {results.length > 0 &&
                                                            results.map((user) => (
                                                                <li
                                                                    key={user._id}
                                                                    className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-md"
                                                                >
                                                                    <div className="flex items-center space-x-4">
                                                                        <Avatar>
                                                                            <AvatarImage
                                                                                src={user.profilePicture || "/profilePic.jpeg"}
                                                                                alt={user.username}
                                                                                className="object-cover"
                                                                            />
                                                                            <AvatarFallback>
                                                                                {user.username.charAt(0).toUpperCase()}
                                                                            </AvatarFallback>
                                                                        </Avatar>
                                                                        <p className="text-sm text-gray-500">{user.username}</p>
                                                                    </div>
                                                                    <Checkbox
                                                                        checked={selected.some((item) => item._id === user._id)}
                                                                        onCheckedChange={() => handleSelect(user)}
                                                                    />
                                                                </li>
                                                            ))}
                                                    </ul>
                                                </ScrollArea>
                                                <Button
                                                    className="w-full"
                                                    disabled={selected.length === 0}
                                                    onClick={handleAddMembers}
                                                >
                                                    Add
                                                </Button>
                                            </div>
                                        </DialogContent>
                                    </Dialog>

                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                    <ScrollArea className="flex-grow py-1 px-2 md:px-6">
                        <div className="flex justify-center">
                            <Avatar className="w-20 h-20">
                                <AvatarImage className="object-cover object-top w-full h-full" src={suggestedUser?.profilePicture} />
                                <AvatarFallback>{suggestedUser?.username}</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className='flex flex-col justify-center items-center mb-10 md:mb-0'>
                            <p className="text-center mt-2 font-semibold">{suggestedUser && 'groupName' in suggestedUser ? suggestedUser?.groupName : suggestedUser?.username}</p>
                            <p className="text-center mb-2">{suggestedUser?.fullName}</p>
                            <Link to={`/profile/${suggestedUser?.username}`}>
                                <Button className='text-sm'>View profile</Button>
                            </Link>
                        </div>
                        {messages && Array.isArray(messages) && messages?.map((message, index) => (
                            <div
                                key={message._id}
                                className={`flex ${message.senderId?._id === userDetails.id || message.senderId === userDetails.id
                                    ? "justify-end"
                                    : "justify-start"
                                    } my-0`}
                            >
                                <div className="messagebox flex gap-0 items-center">
                                    {!(message.senderId?._id === userDetails.id || message.senderId === userDetails.id) && (
                                        <div className="image">
                                            <Avatar className="w-5 h-5 bg-red-400">
                                                <AvatarImage
                                                    src={message?.senderId?.profilePicture}
                                                    className="w-full h-full rounded-full object-top object-cover"
                                                />
                                                <AvatarFallback className="text-xs">{message?.senderId?.username}</AvatarFallback>
                                            </Avatar>
                                        </div>
                                    )}

                                    <div className="px-2 py-2 rounded-full break-words max-w-sm text-sm">
                                        {message.messageType === "image" && (
                                            <img
                                                src={message.mediaUrl}
                                                alt="Image message"
                                                className="w-36 h-52 md:w-56 md:h-96 rounded-xl object-cover cursor-pointer"
                                                onClick={() => handleMediaClick(message.mediaUrl)} // Open dialog on click
                                            />
                                        )}

                                        {message.messageType === "video" && (
                                            <video
                                                src={message.mediaUrl}
                                                className="w-56 h-80 rounded-xl bg-black object-cover cursor-pointer"
                                                onClick={() => handleMediaClick(message.mediaUrl)} // Open dialog on click
                                            />
                                        )}

                                        {message.messageType === "text" && (
                                            <p
                                                className={`px-3 py-2 rounded-full break-words max-w-sm text-sm ${message.senderId?._id === userDetails.id || message.senderId === userDetails.id
                                                    ? "bg-blue-400 text-white"
                                                    : "bg-neutral-100 dark:bg-zinc-800 dark:text-white"
                                                    }`}
                                            >
                                                {message.message}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                        {selectedMedia && (
                            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                                <DialogTrigger className="hidden" />
                                <DialogContent className="bg-transparent border-none shadow-none min-w-[80vw] max-w-[80vw] h-[90vh] flex justify-center items-center">
                                    <DialogClose onClick={() => setIsDialogOpen(false)} />
                                    {selectedMedia.endsWith(".mp4") || selectedMedia.endsWith(".webm") ? (
                                        <video src={selectedMedia} autoPlay controls className="w-full h-full rounded-xl" />
                                    ) : (
                                        <img
                                            src={selectedMedia}
                                            alt="Selected media"
                                            className="w-full h-full rounded-xl object-contain"
                                        />
                                    )}
                                </DialogContent>
                            </Dialog>
                        )}
                    </ScrollArea >
                    <div className="px-0 md:px-4 pb-2">
                        <div className="message-form p-2 dark:bg-neutral-950 rounded-lg space-y-2">
                            {/* Media Preview Section */}
                            {filePreview && (
                                <div className="relative w-20 h-20">
                                    {file?.type?.startsWith('image/') ? (
                                        <img
                                            src={filePreview}
                                            alt="Selected"
                                            className="w-full h-full object-cover rounded-md"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <video
                                            src={filePreview}
                                            controls
                                            className="w-full h-full object-cover rounded-md"
                                        />
                                    )}
                                    {/* Clear Icon to remove file */}
                                    <div
                                        onClick={clearFile}
                                        className='absolute right-1 top-1 p-1 bg-zinc-500/50 rounded-full '>
                                        <X
                                            className="dark:text-white rounded-full h-3 w-3 cursor-pointer"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Form Input Section */}
                            <form
                                onSubmit={(e) => sendMessageHandle(e, suggestedUser._id)}
                                className="flex items-center space-x-2 md:space-x-4 border border-zinc-800 bg-transparent rounded-full px-4 py-2"
                            >
                                <div className="relative">
                                    <Smile
                                        onClick={() => setShowEmojiPicker((prev) => !prev)}
                                        className="h-6 w-6 text-black dark:text-white cursor-pointer"
                                    />
                                    {showEmojiPicker && (
                                        <div className="absolute bottom-full left-0 mb-2 z-10">
                                            <EmojiPicker onEmojiClick={handleEmojiClick} />
                                        </div>
                                    )}
                                </div>
                                <input
                                    value={textMessage}
                                    onChange={(e) => setTextMessage(e.target.value)}
                                    className="flex-grow bg-transparent border-none outline-none text-sm dark:text-white placeholder-gray-400"
                                    placeholder="Message..."
                                />
                                <input
                                    type="file"
                                    accept="image/*,video/*"
                                    onChange={handleFileChange}
                                    className="hidden"
                                    id="fileInput"
                                />
                                <label htmlFor="fileInput">
                                    <Camera className="h-6 w-6 text-black dark:text-white cursor-pointer" />
                                </label>
                                {isresOk ?

                                    <Button variant="outline" type="submit" className="text-sm font-semibold text-blue-400 hover:text-blue-400 hover:bg-white border-none dark:hover:bg-neutral-950 dark:hover:text-blue-400 p-0">
                                        Send
                                    </Button> :
                                    <Button disabled variant="outline" type="submit" className="text-sm font-semibold text-blue-400 hover:text-blue-400 hover:bg-white border-none dark:hover:bg-neutral-950 dark:hover:text-blue-400 p-0">
                                        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                                        Send
                                    </Button>
                                }
                            </form>
                        </div>
                    </div>
                </div >)
                : (
                    <div className="flex-grow hidden md:flex flex-col justify-center items-center bg-white dark:bg-neutral-950 dark:text-white">
                        <div className="emptyField flex flex-col justify-center items-center">
                            <div>
                                <AiOutlineMessage size={100} />
                            </div>
                            <div className="flex flex-col justify-center items-center my-2">
                                <p className='text-xl'>Your messages</p>
                                <p className='text-zinc-500 text-sm'>Send a message to start a chat.</p>
                            </div>
                            <div className="flex justify-center items-center my-2">
                                <button className='bg-blue-500 text-sm font-semibold text-white px-3 py-2 rounded-md'>
                                    send message
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default ChatBox