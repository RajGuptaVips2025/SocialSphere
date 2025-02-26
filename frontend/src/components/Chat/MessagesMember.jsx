import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSuggestedUser } from '@/features/userDetail/userDetailsSlice';
import { ScrollArea } from '../ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useParams } from 'react-router-dom';

function MessagesMember({ socketRef }) {
    const followingUsers = useSelector((state) => state.counter.followingUsers);
    // console.log(followingUsers)
    const onlineUsers = useSelector((state) => state.counter.onlineUsers);
    const { id } = useParams(); // Fetch the `id` from the route params
    const dispatch = useDispatch();

    // Check if the `id` matches any user in the `followingUsers` array
    useEffect(() => {
        if (id) {
            // console.log("id   -->  ",id)
            // console.log("followingUsers  -->  ",followingUsers)
            const arrayOfFollowing=Object.values(followingUsers)
            const matchedUser = arrayOfFollowing?.find((user) => user._id === id);
            if (matchedUser) {
                dispatch(setSuggestedUser(matchedUser));
            }
        }
    }, [id, followingUsers, dispatch]); // Run this effect when `id` or `followingUsers` changes

    return (
        <>
            <ScrollArea className="flex-grow">
                {followingUsers?.length > 0 ? (
                    followingUsers.map((suggestedUser) => (
                        <div
                            onClick={() => dispatch(setSuggestedUser(suggestedUser))}
                            key={suggestedUser._id}
                            className="flex items-center space-x-3 p-3 hover:bg-gray-100 dark:hover:bg-neutral-700 cursor-pointer"
                        >
                            <div className="relative">
                                <Avatar className="bg-gray-200 w-14 h-14 md:w-12 md:h-12 dark:bg-neutral-950 dark:text-white">
                                    <AvatarImage
                                        className="w-full h-full object-cover object-top"
                                        src={
                                            'groupName' in suggestedUser
                                                ? `https://instagram-backend-qqjd.onrender.com/${suggestedUser?.groupImage}`
                                                : suggestedUser?.profilePicture
                                        }
                                        alt={`${suggestedUser?.username}'s profile`}
                                    />
                                    <AvatarFallback>
                                        {'groupName' in suggestedUser
                                            ? `${suggestedUser.groupName}`
                                            : `${suggestedUser.username}`}
                                    </AvatarFallback>
                                </Avatar>
                                {onlineUsers?.includes(suggestedUser?._id) && (
                                    <div className="w-3 h-3 absolute top-9 left-9 border-[2px] border-white bg-green-500 rounded-full"></div>
                                )}
                            </div>
                            <div className="flex-grow">
                                <div className="text-sm md:text-sm text-black dark:text-white">
                                    {'groupName' in suggestedUser
                                        ? `${suggestedUser.groupName}`
                                        : `${suggestedUser.username}`}
                                </div>
                                <div className="text-xs dark:text-white flex justify-between">
                                    {onlineUsers?.includes(suggestedUser?._id) && (
                                        <p className="text-xs text-gray-400">Active now</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No following users available.</p>
                )}
            </ScrollArea>
        </>
    );
}

export default MessagesMember;
