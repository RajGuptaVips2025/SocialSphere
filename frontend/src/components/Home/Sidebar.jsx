import React, { useEffect, useState } from 'react';
import { BiSolidMoviePlay } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { CiSquarePlus } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Button } from '../ui/button';
import { Compass, Film, Heart, Home, Instagram, Menu, Search, X } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { ScrollArea } from '../ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';  // Import shadcn Sheet
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { EditorContent, useEditor } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ReloadIcon } from '@radix-ui/react-icons';
import { toast } from 'react-toastify';


function Sidebar({ compact = false }) {
    const userDetails = useSelector((state) => state.counter.userDetails);
    let RTMNotification = useSelector((state) => state.counter.rtmNotification);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isSearchOpenMobile, setIsSearchOpenMobile] = useState(false);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);  // State to toggle notification sheet
    const [query, setQuery] = useState('');
    const navigate = useNavigate()
    const [results, setResults] = useState([]);
    RTMNotification = Object.values(RTMNotification);
    const [caption, setCaption] = useState('');
    const [isResOk, setIsResOk] = useState(true);
    const [isOpen, setIsOpen] = useState(false)
    const [step, setStep] = useState(1)
    const [selectedImage, setSelectedImage] = useState(null)
    const [file, setFile] = useState([]); // Array to store multiple files
    console.log(file);
    const [getRes, setGetRes] = useState(false)
    const [filePreview, setFilePreview] = useState([]); // Array to store file previews
    const [wideView, setWideView] = useState({ isOpen: false, media: null });


    const [selectedOption, setSelectedOption] = useState(null);
    const [storyMedia, setStoryMedia] = useState([]); // Change to an array to store multiple files
    const [types, setTypes] = useState([]); // Store types (image/video) for each file
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const [stories, setStories] = useState([]);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleStoryFileChange = (e) => {
        const files = Array.from(e.target.files); // Get all selected files
        setStoryMedia(files);
        setTypes(files.map((file) => file.type.startsWith("video") ? "video" : "image")); // Determine types
    };


    const clearStoryFile = (index) => {
        // Remove the selected file
        const updatedMedia = storyMedia.filter((_, i) => i !== index);
        setStoryMedia(updatedMedia);

        // Update the file input's value
        const dataTransfer = new DataTransfer();
        updatedMedia.forEach((file) => dataTransfer.items.add(file));
        document.getElementById('story').files = dataTransfer.files;

        // Optional: Update types if needed
        const updatedTypes = types.filter((_, i) => i !== index);
        setTypes(updatedTypes);
    };

    const handleStoryUpload = async (e) => {
        e.preventDefault();
        setUploadSuccess(true);

        const formData = new FormData();
        storyMedia.forEach((file, index) => {
            formData.append(`media`, file); // Append each file
            formData.append(`type_${index}`, types[index]); // Append the type for each file
        });

        try {
            const response = await axios.post("/api/story/uploadStory", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            if (response.status === 200) {
                const newStories = response.data.story.media; // Get all new stories
                setStories((prevStories) => [...prevStories, ...newStories]); // Append to existing stories
                toast.success("Stories are successfully uploaded!");
            }
        } catch (error) {
            console.error("Error uploading stories:", error);
            toast.error("Failed to upload stories.");
        } finally {
            setUploadSuccess(false);
            setStoryMedia([]); // Clear the selected files
        }
    };

    const fetchStories = async () => {
        try {
            const response = await axios.get(`/api/story/getStories/${userDetails.id}`); // Replace `userId` with actual user ID logic
            if (response.status === 200) {
                setStories(response.data.story.media || []);
            } else {
                console.error("Failed to fetch stories: ", response);
            }
        } catch (error) {
            console.error("Error fetching stories:", error.message);
        }
    };

    useEffect(() => {
        fetchStories();
    }, [uploadSuccess]);

    const openWideView = (media) => {
        setWideView({
            isOpen: true,
            media, // Set the media object here
        });
    };

    const handleMediaChange = (event) => {
        const files = Array.from(event.target.files);
        const newPreviews = files.map((file) => {
            const isImage = file.type.startsWith("image/");
            return {
                file,
                url: URL.createObjectURL(file),
                isImage,
            };
        });

        setFile((prevFiles) => [...prevFiles, ...files]); // Add to the existing files
        setFilePreview((prevPreviews) => [...prevPreviews, ...newPreviews]);
    };

    const clearFile = (indexToRemove) => {
        setFile((prevFiles) => {
            const updatedFiles = prevFiles.filter((_, index) => index !== indexToRemove);
            syncInputWithFiles(updatedFiles); // Sync input with updated files
            return updatedFiles;
        });
        setFilePreview((prevPreviews) =>
            prevPreviews.filter((_, index) => index !== indexToRemove)
        );
    };

    const syncInputWithFiles = (files) => {
        const dataTransfer = new DataTransfer();
        files.forEach((file) => dataTransfer.items.add(file)); // Add updated files to DataTransfer
        document.getElementById("image").files = dataTransfer.files; // Update input element
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        setGetRes(true)

        // Append each file to formData
        file.forEach((file) => {
            formData.append('media', file);
        });

        formData.append('caption', caption);
        formData.append('author', userDetails.id); // Assuming you have author/user info

        try {
            setIsResOk(false);
            const response = await axios.post('/api/posts/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log("Submitting with image:", response.data)
            setIsOpen(false)
            setStep(1)
            setSelectedImage(null)
            navigate(`/profile/${userDetails.username}/${response.data.newPost.caption}`);
            toast.success('Posted Successfully!');

        } catch (error) {
            console.error('Error creating post:', error);
            toast.error("Caption field cannot be empty!")
        } finally {
            setIsResOk(true);
            setGetRes(false)
        }
    };

    const handleSearchClick = () => {
        setIsSearchOpen(!isSearchOpen);
    };
    const handleSearchClickMobile = () => {
        setIsSearchOpenMobile(!isSearchOpenMobile);
    };

    const handleSearchChange = async (e) => {
        const searchQuery = e.target.value;
        setQuery(searchQuery);
        if (searchQuery) {
            try {
                const response = await axios.get(`/api/search/users?query=${searchQuery}`);
                console.log(response.data)
                setResults(response.data);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        } else {
            setResults([]);
        }
    };

    const handleNext = () => {
        if (file.length > 0 && file.length <= 10) {
            setStep(2);
        } else {
            toast.error("Number of Media selected cannot be less than zero and more than 10.");
        }
    };

    const links = [
        { id: 1, icon: <Home className="mr-2 h-6 w-6" />, label: "Home", link: '/' },
        { id: 2, icon: <Search className="mr-2 h-6 w-6" />, label: "Search", link: '#', onClick: handleSearchClick },
        { id: 3, icon: <Compass className="mr-2 h-6 w-6" />, label: "Explore", link: '/explore/' },
        { id: 4, icon: <BiSolidMoviePlay className='mr-2 h-6 w-6' />, label: "Reels", link: '/reels/' },
        { id: 5, icon: <FiSend className="mr-2 h-6 w-6" />, label: "Messages", link: '/direct/inbox' },
        { id: 6, icon: <Heart className="mr-2 h-6 w-6" />, label: "Notification", link: '#', onClick: () => setIsNotificationOpen(true) },
        { id: 7, icon: <CiSquarePlus className='mr-2 h-6 w-6' />, label: "Create", link: '/' },
        {
            id: 8,
            icon: (
                <Avatar className="w-6 h-6 mr-2">
                    <AvatarImage src={userDetails.profilePic} alt={`${userDetails.username}`} className="object-cover object-top" />
                    <AvatarFallback>{userDetails.username}</AvatarFallback>
                </Avatar>
            ),
            label: "Profile",
            link: `/profile/${userDetails.username}`,
        }
    ];

    const smLinks = links.filter(link => ['Home', 'Search', 'Create', 'Reels', 'Profile'].includes(link.label));

    // console.log(RTMNotification)
    return (
        <>
            <aside
                className={`fixed left-0 top-0 bottom-0 z-30 hidden md:flex flex-col w-[72px] ${compact ? "lg:w-20" : "lg:w-60"} p-3 border-r border-zinc-300 dark:border-zinc-800 bg-white dark:text-white dark:bg-neutral-950`}>
                <Link to='/'>
                    <h1 className="text-xl font-semibold mb-8 mt-8 ml-4 flex gap-2">
                        <Instagram />
                        {!compact && <span className='hidden lg:inline'>Instagram</span>}
                    </h1>
                </Link>
                <nav className="space-y-5 flex-grow">
                    {links.map((link) => (
                        <div key={link.id}>
                            {link.label === 'Notification' ? (
                                <>
                                    <Button variant="ghost" className="w-full justify-start relative" onClick={link.onClick}>
                                        <span className='w-8 h-8'>{link.icon}</span>
                                        {/* <span className='hidden lg:inline>{link.label}</span> */}
                                        {!compact && <span className="hidden lg:inline">{link.label}</span>}
                                        {RTMNotification && RTMNotification.length > 0 && (
                                            <div className="absolute top-1 left-8 h-3 w-3 rounded-full bg-red-500 border-2 border-black text-xs">
                                                {/* Notification badge */}
                                            </div>
                                        )}
                                    </Button>
                                    <Sheet open={isNotificationOpen} onOpenChange={setIsNotificationOpen}>
                                        <SheetTrigger asChild>
                                            <div className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-neutral-950 z-20 transition-transform duration-300 ${isNotificationOpen ? 'transform-none' : '-translate-x-full'}`} />
                                        </SheetTrigger>
                                        <SheetContent side="left" className="w-full p-4 bg-white dark:bg-neutral-950 dark:text-white border-r-[.2px] border-zinc-800 rounded-tr-2xl rounded-br-2xl transition-transform duration-300">
                                            <h2 className="font-semibold text-lg mb-4">Notifications</h2>
                                            <ScrollArea className="h-48 p-4">
                                                {RTMNotification && Array.isArray(RTMNotification) && RTMNotification.map((user) => (
                                                    <div className="flex flex-col gap-5 justify-center " key={user.id}>
                                                        <div className="flex items-center space-x-4 p-0 my-2">
                                                            <Link to={`/profile/${user.username}`} className='flex items-center gap-4'>
                                                                <Avatar className="w-10 h-10">
                                                                    <AvatarImage src={user.userPic} alt={user.username} />
                                                                    <AvatarFallback>{user.username}</AvatarFallback>
                                                                </Avatar>
                                                                <div className="flex flex-col items-start">
                                                                    <p className="font-medium text-sm">{user.username}</p>
                                                                    <p className="text-sm text-gray-500">{user?.followType ? "Start Following" : "Liked your post"}</p>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                ))}
                                            </ScrollArea>
                                        </SheetContent>
                                    </Sheet>
                                </>
                            ) : link.label === 'Search' ? (
                                <>
                                    <Button variant="ghost" className="w-full justify-start relative" onClick={link.onClick}>
                                        <span className='w-8 h-8'>{link.icon}</span>
                                        {!compact && <span className="hidden lg:inline">{link.label}</span>}
                                    </Button>
                                    <Sheet open={isSearchOpen} onOpenChange={setIsSearchOpen}>
                                        <SheetTrigger asChild>
                                            <div className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-neutral-950 z-20 transition-transform duration-300 ${isSearchOpen ? 'transform-none' : '-translate-x-full'}`} />
                                        </SheetTrigger>
                                        <SheetContent side="left" className="w-full p-4 bg-white dark:bg-neutral-950 dark:text-white border-r-[.2px] border-zinc-800 rounded-tr-3xl rounded-br-3xl transition-transform duration-300">
                                            <h2 className="font-semibold text-lg mb-4">Search</h2>
                                            <input
                                                type="text"
                                                value={query}
                                                onChange={handleSearchChange}
                                                placeholder="Search users"
                                                className="w-full p-2 rounded-md border dark:border-zinc-800 bg-white dark:bg-neutral-950"
                                            />
                                            <ScrollArea className="h-48 py-4">
                                                {results.length > 0 && results.map((user) => (
                                                    <Link to={`/profile/${user.username}`} key={user._id} className="flex items-center gap-2 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 px-2">
                                                        <Avatar className="w-10 h-10">
                                                            <AvatarImage src={user.profilePicture} alt={user.username} className="object-cover object-top" />
                                                            <AvatarFallback>{user.username}</AvatarFallback>
                                                        </Avatar>
                                                        <div className="flex flex-col">
                                                            <p className="font-medium text-sm">{user.username}</p>
                                                            <p className="text-sm text-gray-500">{user.fullName}</p>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </ScrollArea>
                                        </SheetContent>
                                    </Sheet>
                                </>
                            ) : link.label === 'Create' ? (
                                <>
                                    <Dialog open={isOpen} onOpenChange={setIsOpen}>
                                        <DialogTrigger asChild>
                                            <div className="flex ml-4 cursor-pointer">
                                                <span>{link.icon}</span>
                                                {!compact && <span className="hidden lg:inline">{link.label}</span>}
                                            </div>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[800px] h-auto">
                                            <DialogHeader>
                                                <DialogTitle>Select an Option</DialogTitle>
                                            </DialogHeader>
                                            <div className="grid gap-4 py-4">
                                                {!selectedOption ? (
                                                    // Dropdown options for post and story
                                                    <div className="grid gap-2">
                                                        <Button onClick={() => handleOptionSelect('post')}>Create Post</Button>
                                                        <Button onClick={() => handleOptionSelect('story')}>Upload Story</Button>
                                                    </div>
                                                ) : selectedOption === 'post' ? (
                                                    <Dialog open={isOpen} onOpenChange={setIsOpen}>
                                                        <DialogTrigger asChild>
                                                            <div className="flex ml-4 cursor-pointer">
                                                                <span>{link.icon}</span>
                                                                {!compact && <span className="hidden lg:inline">{link.label}</span>}
                                                            </div>
                                                        </DialogTrigger>
                                                        <DialogContent className="sm:max-w-[800px] h-auto">
                                                            <DialogHeader>
                                                                <DialogTitle>{step === 1 ? "Select Post" : "Confirm Submission"}</DialogTitle>
                                                            </DialogHeader>
                                                            {step === 1 ? (
                                                                <div className="grid gap-4 py-4">
                                                                    <div className="grid grid-cols-4 items-center gap-4">
                                                                        <Input
                                                                            id="image"
                                                                            type="file"
                                                                            accept="image/*,video/*"
                                                                            onChange={handleMediaChange}
                                                                            className="col-span-12"
                                                                            name="media"
                                                                            multiple // Allow multiple files
                                                                        />
                                                                    </div>
                                                                    {filePreview && (
                                                                        <Swiper
                                                                            modules={[Navigation]}
                                                                            navigation
                                                                            spaceBetween={10}
                                                                            slidesPerView={4}
                                                                            className="w-full h-[100px] mt-2"
                                                                        >
                                                                            {filePreview.map((preview, index) => (
                                                                                <SwiperSlide key={index}>
                                                                                    <div className="relative w-full h-full">
                                                                                        {preview.isImage ? (
                                                                                            <img
                                                                                                src={preview.url}
                                                                                                alt="Selected"
                                                                                                className="w-full h-full object-cover rounded-md cursor-pointer"
                                                                                                onClick={() => openWideView(preview)} // Open wide view
                                                                                                loading="lazy"
                                                                                            />
                                                                                        ) : (
                                                                                            <video
                                                                                                src={preview.url}
                                                                                                controls
                                                                                                className="w-full h-full object-cover rounded-md cursor-pointer"
                                                                                                onClick={() => openWideView(preview)} // Open wide view
                                                                                            />
                                                                                        )}
                                                                                        {/* Clear Icon */}
                                                                                        <div
                                                                                            onClick={() => clearFile(index)} // Remove specific file
                                                                                            className="absolute right-2 top-2 p-2 bg-zinc-500/50 rounded-full"
                                                                                        >
                                                                                            <X className="dark:text-white rounded-full h-4 w-4 cursor-pointer" />
                                                                                        </div>
                                                                                    </div>
                                                                                </SwiperSlide>
                                                                            ))}
                                                                        </Swiper>
                                                                    )}
                                                                    <Button onClick={handleNext} className="w-full">
                                                                        Next
                                                                    </Button>
                                                                </div>
                                                            ) : (
                                                                <div className="grid gap-4 py-4">
                                                                    {/* Caption Input */}
                                                                    <div className="border p-4 rounded-lg">
                                                                        <textarea
                                                                            value={caption}
                                                                            onChange={(e) => setCaption(e.target.value)}
                                                                            placeholder="Write a caption..."
                                                                            rows={4}
                                                                            className="w-full border-none focus:outline-none resize-none"
                                                                        />
                                                                    </div>
                                                                    {getRes ? (
                                                                        <Button disabled type="submit">
                                                                            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                                                                            Create Post
                                                                        </Button>
                                                                    ) : (
                                                                        <Button onClick={handleSubmit} className="w-full">
                                                                            Create Post
                                                                        </Button>
                                                                    )}
                                                                </div>
                                                            )}
                                                        </DialogContent>
                                                    </Dialog>
                                                ) : (
                                                    <div className="grid gap-4 py-4">
                                                        {/* File Input */}
                                                        <div className="grid grid-cols-4 items-center gap-4">
                                                            <Input
                                                                id="story"
                                                                type="file"
                                                                accept="image/*,video/*"
                                                                onChange={handleStoryFileChange}
                                                                className="col-span-12"
                                                                name="media"
                                                                multiple // Enable multiple file selection
                                                            />
                                                        </div>

                                                        {/* Media Preview */}
                                                        {storyMedia.length > 0 && (
                                                            <Swiper
                                                                modules={[Navigation]}
                                                                navigation
                                                                spaceBetween={10}
                                                                slidesPerView={3}
                                                                className="w-full h-[120px] mt-2"
                                                            >
                                                                {storyMedia.map((file, index) => (
                                                                    <SwiperSlide key={index}>
                                                                        <div className="relative w-full h-full">
                                                                            {types[index] === "image" ? (
                                                                                <img
                                                                                    src={URL.createObjectURL(file)}
                                                                                    alt={`Story Preview ${index + 1}`}
                                                                                    className="w-full h-full object-cover rounded-md cursor-pointer hover:opacity-90 transition-opacity"
                                                                                    onClick={() => openWideView(file)} // Open wide view
                                                                                    loading="lazy"
                                                                                />
                                                                            ) : (
                                                                                <video
                                                                                    src={URL.createObjectURL(file)}
                                                                                    controls
                                                                                    className="w-full h-full object-cover rounded-md cursor-pointer hover:opacity-90 transition-opacity"
                                                                                    onClick={() => openWideView(file)} // Open wide view
                                                                                />
                                                                            )}
                                                                            {/* Clear Icon */}
                                                                            <div
                                                                                onClick={() => clearStoryFile(index)} // Remove specific file
                                                                                className="absolute right-2 top-2 p-2 bg-zinc-500/50 rounded-full"
                                                                            >
                                                                                <X className="dark:text-white rounded-full h-4 w-4 cursor-pointer" />
                                                                            </div>
                                                                        </div>
                                                                    </SwiperSlide>
                                                                ))}
                                                            </Swiper>
                                                        )}

                                                        {/* Upload Button */}
                                                        <div className="mt-auto">
                                                            {uploadSuccess ? (
                                                                <Button disabled className="w-full flex items-center justify-center gap-2">
                                                                    <ReloadIcon className="h-4 w-4 animate-spin" />
                                                                    Uploading...
                                                                </Button>
                                                            ) : (
                                                                <Button onClick={handleStoryUpload} className="w-full">
                                                                    Upload Story
                                                                </Button>
                                                            )}
                                                        </div>
                                                    </div>

                                                )}
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                </>
                            ) : (
                                <>
                                    <Button variant="ghost" className="w-full justify-start" asChild>
                                        <Link to={link.link}>
                                            <span className='w-8 h-8'>{link.icon}</span>
                                            {!compact && <span className="hidden lg:inline">{link.label}</span>}
                                        </Link>
                                    </Button>
                                </>
                            )}
                        </div>
                    ))}
                </nav>
                <Button variant="ghost" className="w-full justify-start mt-auto" asChild>
                    <Link to='/' >

                        <span><Menu className="mr-2 h-6 w-6" /></span>
                        {!compact && <span className="hidden lg:inline">More</span>}
                    </Link>
                </Button>
            </aside>

            {/* Bottom navigation bar for small screens */}
            <nav className="fixed bottom-0 left-0 right-0 z-20 flex items-center justify-around border-t border-zinc-300 dark:border-zinc-800 bg-white dark:text-white dark:bg-neutral-950 md:hidden p-2">
                {smLinks.map((link) => (
                    <Button variant="ghost" className="w-full justify-center" asChild key={link.id}>
                        {link.onClick ?
                            <>
                                <Link to={link.link} onClick={handleSearchClickMobile}>
                                    <span className="w-6 h-6">{link.icon}</span>
                                </Link>
                            </>
                            :
                            <>
                                <Link to={link.link}>
                                    <span className="w-6 h-6">{link.icon}</span>
                                </Link>
                            </>
                        }
                    </Button>
                ))}
            </nav>

            {/* Search drawer for small screens */}
            <Sheet open={isSearchOpenMobile} onOpenChange={setIsSearchOpenMobile}>
                <SheetTrigger asChild>
                    <div />
                </SheetTrigger>
                <SheetContent side="bottom" className="w-full p-4 bg-white dark:bg-neutral-950 dark:text-white border-t-[.2px] border-zinc-800 rounded-tr-3xl rounded-tl-3xl transition-transform duration-300">
                    <h2 className="font-semibold text-lg mb-4">Search</h2>
                    <input
                        type="text"
                        value={query}
                        onChange={handleSearchChange}
                        placeholder="Search users"
                        className="w-full p-2 rounded-md border dark:border-zinc-800 bg-white dark:bg-neutral-950"
                    />
                    <ScrollArea className="h-48 py-4">
                        {results.length > 0 && results.map((user) => (
                            <Link to={`/profile/${user.username}`} key={user._id} className="flex items-center gap-2 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 px-2">
                                <Avatar className="w-10 h-10">
                                    <AvatarImage src={user.profilePicture} alt={user.username} className="object-cover object-top" />
                                    <AvatarFallback>{user.username}</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    <p className="font-medium text-sm">{user.username}</p>
                                    <p className="text-sm text-gray-500">{user.fullName}</p>
                                </div>
                            </Link>
                        ))}
                    </ScrollArea>
                </SheetContent>
            </Sheet>
        </>
    );
}

export default Sidebar;