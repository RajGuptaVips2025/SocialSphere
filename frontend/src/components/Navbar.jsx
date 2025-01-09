// import React from 'react'
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom'
// import { FiSend } from "react-icons/fi";
// import { FaRegHeart } from "react-icons/fa";
// import InstaLogo from '../assets/InstaLogo.png';

// function Navbar() {
//     const userDetails = useSelector((state) => state.counter.userDetails)
//     const links = [
//         { id: 2, icon: <FaRegHeart size={20} />, link: '/' },
//         { id: 1, icon: <FiSend size={20} /> ,link: '/direct/inbox' },
//     ];
//     return (
//         <>
//             <aside className="z-50 fixed md:hidden top-0 w-full h-16 dark:bg-neutral-950 border-b border-zinc-800">
//                 <div className="flex w-screen items-center justify-between">
//                     <div className=" ml-5 flex items-center mt-4">
//                         <img className="w-20" src={InstaLogo} alt="Instagram Logo" />
//                     </div>
//                     <nav className="flex gap-3 mt-2 items-center mr-8 ">
//                         {links.map((link) => (
//                             <Link key={link.id} to={link.link} className=" ">
//                                 <div className="flex items-center rounded-md cursor-pointer ">
//                                     <span className="text-white">{link.icon}</span> 
//                                 </div>
//                             </Link>
//                         ))}
//                     </nav>
//                 </div>
//             </aside>
//         </>
//     )
// }

// export default Navbar   



import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiSend } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import InstaLogo from '../assets/InstaLogo.png';
import { Sheet, SheetTrigger, SheetContent } from './ui/sheet';  // Import shadcn Sheet
import { ScrollArea } from './ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

function Navbar() {
    const userDetails = useSelector((state) => state.counter.userDetails);
    let RTMNotification = useSelector((state) => state.counter.rtmNotification);
    RTMNotification = Object.values(RTMNotification);

    const [isNotificationOpen, setIsNotificationOpen] = useState(false);

    const links = [
        { id: 1, icon: <FiSend size={20} />, link: '/direct/inbox' },
    ];

    return (
        <>
            <aside className="z-50 fixed md:hidden top-0 w-full h-16 dark:bg-neutral-950 border-b border-zinc-800">
                <div className="flex w-screen items-center justify-between">
                    <div className="ml-5 flex items-center mt-4">
                        <img className="w-20" src={InstaLogo} alt="Instagram Logo" />
                    </div>
                    <nav className="flex gap-3 mt-2 items-center mr-2">
                        <Sheet open={isNotificationOpen} onOpenChange={setIsNotificationOpen}>
                            <SheetTrigger asChild>
                                <div className="cursor-pointer text-white">
                                    <FaRegHeart size={20} />
                                </div>
                            </SheetTrigger>
                            <SheetContent side="top" className="h-1/2 p-4 bg-white border-b border-zinc-900 rounded-br-3xl rounded-bl-3xl dark:bg-neutral-950 dark:text-white">
                                <h2 className="font-semibold text-lg mb-4">Notifications</h2>
                                <ScrollArea className="h-48 p-4">
                                    {RTMNotification && Array.isArray(RTMNotification) && RTMNotification.map((user) => (
                                        <div className="flex flex-col gap-5 justify-center " key={user.id}>dsca
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
                        {links.map((link) => (
                            <Link key={link.id} to={link.link}>
                                <div className="flex items-center rounded-md cursor-pointer">
                                    <span className="text-white">{link.icon}</span>
                                </div>
                            </Link>
                        ))}
                    </nav>
                </div>
            </aside>
        </>
    );
}

export default Navbar;

