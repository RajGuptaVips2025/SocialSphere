import React, { useState } from 'react';
import { BiSolidMoviePlay } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { CiSquarePlus } from "react-icons/ci";
import { Link } from 'react-router-dom';
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


function Sidebar() {
    const userDetails = useSelector((state) => state.counter.userDetails);
    let RTMNotification = useSelector((state) => state.counter.rtmNotification);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isSearchOpenMobile, setIsSearchOpenMobile] = useState(false);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);  // State to toggle notification sheet
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    RTMNotification = Object.values(RTMNotification);
    const [caption, setCaption] = useState('');
    const [media, setMedia] = useState([]); // Update to handle multiple files (images or videos)
    const [isResOk, setIsResOk] = useState(true);
    const [isOpen, setIsOpen] = useState(false)
    const [step, setStep] = useState(1)
    const [selectedImage, setSelectedImage] = useState(null)
    const [file, setFile] = useState([]); // Array to store multiple files
    const [filePreview, setFilePreview] = useState([]); // Array to store file previews

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
            console.log("Submitting with image:", selectedImage)
            setIsOpen(false)
            setStep(1)
            setSelectedImage(null)
            //   navigate('/');

        } catch (error) {
            console.error('Error creating post:', error);
        } finally {
            setIsResOk(true);
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
        if (media.length <= 10) {
            setStep(2)
        } else {
            alert("Please select image less then 10")
        }
    }
    // console.log(media)

    const editor = useEditor({
        extensions: [StarterKit],
        content: caption,
        onUpdate: ({ editor }) => {
            setCaption(editor.getHTML()); // Update caption as HTML when the editor content changes
        },
    });


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


    return (
        <>
            <aside
                className={`fixed left-0 top-0 bottom-0 z-30 hidden md:flex flex-col w-[72px] lg:w-60 p-3 border-r border-zinc-300 dark:border-zinc-800 bg-white dark:text-white dark:bg-neutral-950`}>
                <Link to='/'>
                    <h1 className="text-xl font-semibold mb-8 mt-8 ml-4 flex gap-2">
                        <Instagram />
                        <span className='hidden lg:inline'>Instagram</span>
                    </h1>
                </Link>
                <nav className="space-y-5 flex-grow">
                    {links.map((link) => (
                        <div key={link.id}>
                            {link.label === 'Notification' ? (
                                <>
                                    <Button variant="ghost" className="w-full justify-start relative" onClick={link.onClick}>
                                        <span className='w-8 h-8'>{link.icon}</span>
                                        <span className='hidden lg:inline'>{link.label}</span>
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
                                                                    <p className="text-sm text-gray-500">Liked your post</p>
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
                                        <span className='hidden lg:inline'>{link.label}</span>
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
                                                <span>{link.label}</span>
                                            </div>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[800px] h-[400px]">
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
                                                            className="w-full h-[100px]"
                                                        >
                                                            {filePreview.map((preview, index) => (
                                                                <SwiperSlide key={index}>
                                                                    <div className="relative w-full h-full">
                                                                        {preview.isImage ? (
                                                                            <img
                                                                                src={preview.url}
                                                                                alt="Selected"
                                                                                className="w-full h-full object-cover rounded-md"
                                                                                loading="lazy"
                                                                            />
                                                                        ) : (
                                                                            <video
                                                                                src={preview.url}
                                                                                controls
                                                                                className="w-full h-full object-cover rounded-md"
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
                                                    <Button onClick={handleSubmit} className="w-full">
                                                        Submit
                                                    </Button>
                                                </div>

                                                // <div className="grid gap-4 py-4">
                                                //     {/* TipTap editor for caption */}
                                                //     <div className="border p-4 rounded-lg">
                                                //         <EditorContent editor={editor} />
                                                //     </div>
                                                //     <Button onClick={handleSubmit} className="w-full">
                                                //         Submit
                                                //     </Button>
                                                // </div>
                                            )}
                                        </DialogContent>
                                    </Dialog>
                                </>
                            ) : (
                                <>
                                    <Button variant="ghost" className="w-full justify-start" asChild>
                                        <Link to={link.link}>
                                            <span className='w-8 h-8'>{link.icon}</span>
                                            <span className="hidden lg:inline">{link.label}</span>
                                        </Link>
                                    </Button>
                                </>
                            )}
                        </div>
                    ))}
                </nav>
                <Button variant="ghost" className="w-full justify-start mt-auto" asChild>
                    <Link to='/' >
                        <Menu className="mr-2 h-6 w-6" />
                        <span className="hidden lg:inline">More</span>
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