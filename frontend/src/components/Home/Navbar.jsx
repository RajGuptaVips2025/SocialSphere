/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { BiSolidMoviePlay } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { CiSquarePlus } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from '../ui/button';
import { Compass, Home, Image, Menu, Search, X } from 'lucide-react';
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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ReloadIcon } from '@radix-ui/react-icons';
import { toast } from 'react-toastify';
import api from '@/api/api';
import { IoEarthSharp } from 'react-icons/io5';


function Navbar({ compact = false }) {
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
    // console.log(file);
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
            formData.append('userId', userDetails.id); // Assuming userDetails has the ID
        });

        try {
            const response = await api.post("/story/uploadStory", formData, {
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
            const response = await api.get(`/story/getStories/${userDetails.id}`); // Replace `userId` with actual user ID logic
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
        // fetchStories();
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

        formData.append('caption', "caption");
        // console.log("caption--->",caption)
        // console.log(formData)
        formData.append('author', userDetails.id); // Assuming you have author/user info

        try {
            setIsResOk(false);
            const response = await api.post('/posts/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            // console.log("Submitting with image:", response.data)
            setIsOpen(false)
            setStep(1)
            setSelectedImage(null)
            navigate(`/profile/${userDetails.username}/${response?.data?.newPost?.caption}`);
            toast.success('Posted Successfully!');

        } catch (error) {
            console.error('Error creating post:', error.message);
            toast.error(error.message)
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
        { id: 3, icon: <Compass className="mr-2 h-6 w-6" />, label: "Discover", link: '/discover/' },
        { id: 4, icon: <BiSolidMoviePlay className='mr-2 h-6 w-6' />, label: "Vids", link: '/vids/' },
        { id: 5, icon: <FiSend className="mr-2 h-6 w-6" />, label: "Chats", link: '/chats/' },
        { id: 6, icon: <CiSquarePlus className='mr-2 h-6 w-6' />, label: "Create", link: '/' },
        {
            id: 7,
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

    const smLinks = links.filter(link => ['Home', 'Search', 'Create', 'Vids', 'Profile'].includes(link.label));

    return (
        <>
            {/* <nav
                className={`fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-4 py-2 border-b border-black dark:border-zinc-800 bg-[#1e293b] text-white dark:bg-neutral-950`}
            > */}
            <nav
                className={`fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-4 py-2 border-b border-slate-700 bg-[#1e293b] text-white`}
            >
                <Link to="/" className="flex items-center gap-2 ">
                    <IoEarthSharp className="text-purple-500 w-8 h-8" />
                    <span className=" text-lg text-white-400">SocialSphere</span>
                </Link>

                <div className="hidden md:flex items-center space-x-6">
                    {links.map((link) => (
                        <div key={link.id} className="relative">
                            {link.label === 'Search' ? (
                                <>
                                    <Button variant="ghost" onClick={link.onClick} className="flex items-center gap-2 hover:bg-slate-700 dark:hover:bg-slate-700">
                                        <span className="w-6 h-6">{link.icon}</span>
                                        {!compact && <span className="hidden lg:inline">{link.label}</span>}
                                    </Button>
                                    <Sheet open={isSearchOpen} onOpenChange={setIsSearchOpen}>
                                        <SheetTrigger asChild>
                                            <div />
                                        </SheetTrigger>
                                        {/* <SheetContent
                                            side="right"
                                            className="w-[300px] sm:w-[400px] p-0  text-white border-slate-700 border-l-[.2px] rounded-tl-3xl rounded-bl-3xl transition-transform duration-300 flex flex-col"
                                        > */}
                                        <SheetContent
                                            side="right"
                                            className="w-[300px] sm:w-[400px] p-0 bg-[#1e293b] text-black dark:bg-[#1e293b] dark:text-white border-l border-zinc-200 dark:border-slate-700 rounded-tl-3xl rounded-bl-3xl transition-transform duration-300 flex flex-col"
                                        >
                                            {/* <div className="p-4 border-b dark:border-zinc-800"> */}
                                            <div className="p-4 border-b border-zinc-200 dark:border-zinc-800">
                                                <h2 className="font-semibold text-lg mb-4">Search</h2>
                                                <input
                                                    type="text"
                                                    value={query}
                                                    onChange={handleSearchChange}
                                                    placeholder="Search users"
                                                    // className="w-full p-2 rounded-md border dark:border-zinc-800 bg-white dark:bg-neutral-950 focus:outline-none focus:ring-2 focus:ring-zinc-500"

                                                    className="w-full p-2 rounded-md border border-zinc-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-zinc-500"

                                                />
                                            </div>
                                            <ScrollArea className="flex-1">
                                                <div className="p-2">
                                                    {results.length > 0 ? (
                                                        results.map((user) => (
                                                            <Link
                                                                to={`/profile/${user.username}`}
                                                                key={user._id}
                                                                onClick={() => setIsSearchOpen(false)}
                                                                // className="flex items-center gap-3 py-3 px-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                                                                className="flex items-center gap-3 py-3 px-2 hover:bg-slate-700 dark:hover:bg-slate-700 rounded-lg transition-colors"
                                                            >
                                                                <Avatar className="w-12 h-12">
                                                                    <AvatarImage src={user.profilePicture} alt={user.username} />
                                                                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                                                                        {user.username.charAt(0).toUpperCase()}
                                                                    </AvatarFallback>
                                                                </Avatar>
                                                                <div className="flex-1 min-w-0">
                                                                    <p className="font-medium text-sm truncate">{user.username}</p>
                                                                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{user.fullName}</p>
                                                                </div>
                                                            </Link>
                                                        ))
                                                    ) : query ? (
                                                        <p className="text-center text-gray-500 py-8">No users found</p>
                                                    ) : null}
                                                </div>
                                            </ScrollArea>
                                        </SheetContent>
                                    </Sheet>
                                </>
                            ) : link.label === 'Create' ? (
                                <>
                                    <Dialog open={isOpen} onOpenChange={setIsOpen}>
                                        <DialogTrigger asChild>
                                            <Button variant="ghost" className="flex items-center gap-2 hover:bg-slate-700 dark:hover:bg-slate-700">
                                                <span className="w-6 h-6">{link.icon}</span>
                                                {!compact && <span className="hidden lg:inline">{link.label}</span>}
                                            </Button>
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
                                                    <div className="container mx-auto px-4 py-6 max-w-xl">
                                                        <div className="card-container bg-darkbg-card rounded-2xl p-6 shadow-lg border border-darkborder">
                                                            <h1 className="text-2xl font-bold text-center mb-6 text-darktext-default">
                                                                {step === 1 ? "Create New Post" : "Add Caption"}
                                                            </h1>

                                                            {step === 1 ? (
                                                                <>
                                                                    <div className="mb-6">
                                                                        <label className="block text-darktext-default text-sm font-semibold mb-2">
                                                                            Upload Media (Images/Videos)
                                                                        </label>
                                                                        <div className="border-2 border-dashed border-darkborder rounded-lg p-6 text-center cursor-pointer hover:border-primary-light transition-colors">
                                                                            <label htmlFor="post-upload" className="flex flex-col items-center justify-center space-y-3">
                                                                                <Image className="w-12 h-12 text-darktext-muted" />
                                                                                <span className="text-darktext-muted font-medium">
                                                                                    Click to upload or drag and drop (Max 10)
                                                                                </span>
                                                                                <input
                                                                                    id="post-upload"
                                                                                    type="file"
                                                                                    accept="image/*,video/*"
                                                                                    onChange={handleMediaChange}
                                                                                    className="hidden"
                                                                                    name="media"
                                                                                    multiple
                                                                                />
                                                                            </label>
                                                                        </div>
                                                                    </div>

                                                                    {filePreview && filePreview.length > 0 && (
                                                                        <Swiper
                                                                            modules={[Navigation]}
                                                                            navigation
                                                                            spaceBetween={10}
                                                                            slidesPerView={3}
                                                                            className="w-full h-[120px] mb-6"
                                                                        >
                                                                            {filePreview.map((preview, index) => (
                                                                                <SwiperSlide key={index}>
                                                                                    <div className="relative w-full h-full rounded-lg overflow-hidden border border-darkborder">
                                                                                        {preview.isImage ? (
                                                                                            <img
                                                                                                src={preview.url}
                                                                                                alt="Selected"
                                                                                                className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                                                                                                onClick={() => openWideView(preview)}
                                                                                                loading="lazy"
                                                                                            />
                                                                                        ) : (
                                                                                            <video
                                                                                                src={preview.url}
                                                                                                controls
                                                                                                className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                                                                                                onClick={() => openWideView(preview)}
                                                                                            />
                                                                                        )}
                                                                                        <button
                                                                                            type="button"
                                                                                            onClick={() => clearFile(index)}
                                                                                            className="absolute top-2 right-2 bg-darkbg-light rounded-full p-1 text-white hover:bg-red-500 transition-colors"
                                                                                            aria-label="Remove media"
                                                                                        >
                                                                                            <X className="w-4 h-4" />
                                                                                        </button>
                                                                                    </div>
                                                                                </SwiperSlide>
                                                                            ))}
                                                                        </Swiper>
                                                                    )}

                                                                    <Button onClick={handleNext} className="btn-primary w-full">
                                                                        Next
                                                                    </Button>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <div className="mb-6">
                                                                        <label
                                                                            htmlFor="caption"
                                                                            className="block text-darktext-default text-sm font-semibold mb-2"
                                                                        >
                                                                            Caption
                                                                        </label>
                                                                        <textarea
                                                                            id="caption"
                                                                            rows={4}
                                                                            placeholder="Write a caption..."
                                                                            value={caption}
                                                                            onChange={(e) => setCaption(e.target.value)}
                                                                            className="input-field resize-none w-full border border-darkborder rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                                                                        ></textarea>
                                                                    </div>

                                                                    {getRes ? (
                                                                        <Button disabled className="btn-primary w-full flex items-center justify-center gap-2">
                                                                            <ReloadIcon className="h-4 w-4 animate-spin" />
                                                                            Creating Post...
                                                                        </Button>
                                                                    ) : (
                                                                        <Button onClick={handleSubmit} className="btn-primary w-full">
                                                                            Create Post
                                                                        </Button>
                                                                    )}
                                                                </>
                                                            )}
                                                        </div>
                                                    </div>
                                                ) : (
                                                    // Story Upload Section
                                                    <div className="container mx-auto px-4 py-6 max-w-xl">
                                                        <div className="card-container bg-darkbg-card rounded-2xl p-6 shadow-lg border border-darkborder">
                                                            <h1 className="text-2xl font-bold text-center mb-6 text-darktext-default">
                                                                Upload Story
                                                            </h1>

                                                            <div className="mb-6">
                                                                <label className="block text-darktext-default text-sm font-semibold mb-2">
                                                                    Select Story Media (Images/Videos)
                                                                </label>
                                                                <div className="border-2 border-dashed border-darkborder rounded-lg p-6 text-center cursor-pointer hover:border-primary-light transition-colors">
                                                                    <label htmlFor="story-upload" className="flex flex-col items-center justify-center space-y-3">
                                                                        <Image className="w-12 h-12 text-darktext-muted" />
                                                                        <span className="text-darktext-muted font-medium">
                                                                            Click to upload or drag and drop
                                                                        </span>
                                                                        <input
                                                                            id="story-upload"
                                                                            type="file"
                                                                            accept="image/*,video/*"
                                                                            onChange={handleStoryFileChange}
                                                                            className="hidden"
                                                                            name="media"
                                                                            multiple
                                                                        />
                                                                    </label>
                                                                </div>
                                                            </div>

                                                            {storyMedia.length > 0 && (
                                                                <Swiper
                                                                    modules={[Navigation]}
                                                                    navigation
                                                                    spaceBetween={10}
                                                                    slidesPerView={3}
                                                                    className="w-full h-[120px] mb-6"
                                                                >
                                                                    {storyMedia.map((file, index) => (
                                                                        <SwiperSlide key={index}>
                                                                            <div className="relative w-full h-full rounded-lg overflow-hidden border border-darkborder">
                                                                                {types[index] === "image" ? (
                                                                                    <img
                                                                                        src={URL.createObjectURL(file)}
                                                                                        alt={`Story Preview ${index + 1}`}
                                                                                        className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                                                                                        onClick={() => openWideView(file)}
                                                                                        loading="lazy"
                                                                                    />
                                                                                ) : (
                                                                                    <video
                                                                                        src={URL.createObjectURL(file)}
                                                                                        controls
                                                                                        className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                                                                                        onClick={() => openWideView(file)}
                                                                                    />
                                                                                )}
                                                                                <button
                                                                                    type="button"
                                                                                    onClick={() => clearStoryFile(index)}
                                                                                    className="absolute top-2 right-2 bg-darkbg-light rounded-full p-1 text-white hover:bg-red-500 transition-colors"
                                                                                >
                                                                                    <X className="w-4 h-4" />
                                                                                </button>
                                                                            </div>
                                                                        </SwiperSlide>
                                                                    ))}
                                                                </Swiper>
                                                            )}

                                                            {uploadSuccess ? (
                                                                <Button disabled className="btn-primary w-full flex items-center justify-center gap-2">
                                                                    <ReloadIcon className="h-4 w-4 animate-spin" />
                                                                    Uploading...
                                                                </Button>
                                                            ) : (
                                                                <Button onClick={handleStoryUpload} className="btn-primary w-full">
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
                                <Button variant="ghost" asChild className="flex items-center gap-2 hover:bg-slate-700 dark:hover:bg-slate-700">
                                    <Link to={link.link}>
                                        <span className="w-6 h-6">{link.icon}</span>
                                        {!compact && <span className="hidden lg:inline">{link.label}</span>}
                                    </Link>
                                </Button>
                            )}
                        </div>
                    ))}
                </div>

                {/* ✅ Mobile Hamburger Button (Place Inside Navbar) */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="hover:bg-slate-700 dark:hover:bg-slate-700">
                                <Menu className="w-6 h-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[260px] bg-[#1e293b] dark:bg-[#1e293b] text-white border-slate-700 p-4">
                            <h2 className="font-semibold text-lg mb-4">Menu</h2>
                            <div className="flex flex-col space-y-3">
                                {links.map((link) => (
                                    <div key={link.id}>
                                        {link.label === 'Search' ? (
                                            <Button
                                                variant="ghost"
                                                className="flex items-center gap-3 justify-start hover:bg-slate-700 dark:hover:bg-slate-700"
                                                onClick={() => {
                                                    setIsSearchOpenMobile(true);
                                                }}
                                            >
                                                <span className="w-6 h-6">{link.icon}</span>
                                                <span>{link.label}</span>
                                            </Button>
                                        ) : link.label === 'Create' ? (
                                            <Button
                                                variant="ghost"
                                                className="flex items-center gap-3 justify-start hover:bg-slate-700 dark:hover:bg-slate-700"
                                                onClick={() => {
                                                    setIsOpen(true); // Open your Dialog
                                                }}
                                            >
                                                <span className="w-6 h-6">{link.icon}</span>
                                                <span>{link.label}</span>
                                            </Button>
                                        ) : (
                                            <Button variant="ghost" className="flex items-center gap-3 justify-start hover:bg-slate-700 dark:hover:bg-slate-700" asChild>
                                                <Link to={link.link}>
                                                    <span className="w-6 h-6">{link.icon}</span>
                                                    <span>{link.label}</span>
                                                </Link>
                                            </Button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>

            {/* Mobile Search Drawer (unchanged) */}
            <Sheet open={isSearchOpenMobile} onOpenChange={setIsSearchOpenMobile}>
                <SheetTrigger asChild>
                    <div />
                </SheetTrigger>
                <SheetContent
                    side="bottom"
                    className="w-full p-4 bg-[#1e293b] text-white border-slate-700 border-t-[.2px]  rounded-tr-3xl rounded-tl-3xl transition-transform duration-300"
                >
                    <h2 className="font-semibold text-lg mb-4">Search</h2>
                    <input
                        type="text"
                        value={query}
                        onChange={handleSearchChange}
                        placeholder="Search users"
                        className="w-full p-2 rounded-md border dark:border-zinc-800 bg-white dark:bg-neutral-950"
                    />
                    <ScrollArea className="h-48 py-4">
                        {results.length > 0 &&
                            results.map((user) => (
                                <Link
                                    to={`/profile/${user.username}`}
                                    key={user._id}
                                    className="flex items-center gap-2 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 px-2"
                                >
                                    <Avatar className="w-10 h-10">
                                        <AvatarImage src={user.profilePicture} alt={user.username} />
                                        <AvatarFallback>{user.username}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-medium text-sm">{user.username}</p>
                                        <p className="text-xs text-gray-500">{user.fullName}</p>
                                    </div>
                                </Link>
                            ))}
                    </ScrollArea>
                </SheetContent>
            </Sheet>
        </>
    );
}

export default Navbar;