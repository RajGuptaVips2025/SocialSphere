/* MessagesMember.jsx */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import {  useSelector, shallowEqual } from 'react-redux';
// import { setSuggestedUser } from '@/features/userDetail/userDetailsSlice';
import { ScrollArea } from '../ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

function MessagesMember({ socketRef }) {
  // use shallowEqual so component doesn't re-render for unrelated store changes
  const followingUsers = useSelector((state) => state.counter.followingUsers, shallowEqual);
//   console.log(followingUsers);
  const onlineUsers = useSelector((state) => state.counter.onlineUsers, shallowEqual);
//   const dispatch = useDispatch();

  if (!followingUsers || followingUsers.length === 0) {
    return <p className="text-gray-500">No following users available.</p>
  }

  return (
    <ScrollArea className="flex-grow">
      <AnimatePresence>
        {followingUsers.map((suggestedUser) => (
          // key moved to motion.div so AnimatePresence can track child
          <Link
            to={`/chats/${suggestedUser._id}`}
            // remove dispatch here; ChatComponent will derive selected user from URL (single source of truth)
            key={`link-${suggestedUser._id}`} // harmless to have but AnimatePresence's key is motion's key
          >
            <motion.div
              key={suggestedUser._id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.24 }}
              className="flex items-center space-x-3 p-3 hover:bg-gray-100 dark:hover:bg-neutral-700 cursor-pointer rounded-lg"
            >
              {/* avatar + content */}
              <div className="relative">
                <Avatar className="bg-gray-200 w-14 h-14 md:w-12 md:h-12 dark:bg-neutral-950 dark:text-white">
                  <AvatarImage
                    className="w-full h-full object-cover object-top"
                    src={'groupName' in suggestedUser ? `http://localhost:5000/${suggestedUser?.groupImage}` : suggestedUser?.profilePicture}
                    alt={`${suggestedUser?.username}'s profile`}
                  />
                  <AvatarFallback>
                    {'groupName' in suggestedUser ? `${suggestedUser.groupName}` : `${suggestedUser.username}`}
                  </AvatarFallback>
                </Avatar>

                {onlineUsers?.includes(suggestedUser?._id) && (
                  <div className="w-3 h-3 absolute top-9 left-9 border-[2px] border-white bg-green-500 rounded-full" />
                )}
              </div>

              <div className="flex-grow">
                <div className="flex flex-col p-2 rounded-lg">
                  <span className="font-semibold text-black dark:text-white truncate">
                    {'groupName' in suggestedUser ? suggestedUser.groupName : suggestedUser.username}
                  </span>

                  <div className="flex justify-between items-center mt-1">
                    <span className="text-gray-500 dark:text-gray-400 text-sm truncate max-w-[70%]">
                      {suggestedUser.lastMessage?.text
                        ? suggestedUser.lastMessage.text.length > 15
                          ? suggestedUser.lastMessage.text.slice(0, 15) + "..."
                          : suggestedUser.lastMessage.text
                        : "No messages yet"}
                    </span>

                    <span className="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap ml-2 flex-shrink-0">
                      {suggestedUser.lastMessage?.createdAt
                        ? new Date(suggestedUser.lastMessage.createdAt).toLocaleString("en-IN", {
                            day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit"
                          })
                        : ""}
                    </span>
                  </div>
                </div>

                <div className="text-xs dark:text-white flex justify-between">
                  {onlineUsers?.includes(suggestedUser?._id) && <p className="text-xs text-gray-400">Active now</p>}
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </AnimatePresence>
    </ScrollArea>
  );
}

export default React.memo(MessagesMember);










// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setSuggestedUser } from '@/features/userDetail/userDetailsSlice';
// import { ScrollArea } from '../ui/scroll-area';
// import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link, useNavigate } from 'react-router-dom';
// // import { Link } from 'lucide-react';

// function MessagesMember({ socketRef }) {
//     const followingUsers = useSelector((state) => state.counter.followingUsers);
//     console.log(followingUsers);
//     const onlineUsers = useSelector((state) => state.counter.onlineUsers);
//     const dispatch = useDispatch();
//     const navigate = useNavigate(); // 🆕 add this

//     return (
//         <ScrollArea className="flex-grow">
//             {followingUsers?.length > 0 ? (
//                 <AnimatePresence>
//                     {followingUsers.map((suggestedUser) => (
//                         <Link
//                             key={suggestedUser._id}
//                             to={`/chats/${suggestedUser._id}`}
//                             // onClick={() => dispatch(setSuggestedUser(suggestedUser))}
//                         >
//                             <motion.div
//                                 // key={suggestedUser._id}
//                                 layout // enables smooth movement when list reorders
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 exit={{ opacity: 0, y: -20 }}
//                                 transition={{ duration: 0.3 }}
//                                 className="flex items-center space-x-3 p-3 hover:bg-gray-100 dark:hover:bg-neutral-700 cursor-pointer rounded-lg"
//                             >
//                                 <div className="relative">
//                                     <Avatar className="bg-gray-200 w-14 h-14 md:w-12 md:h-12 dark:bg-neutral-950 dark:text-white">
//                                         <AvatarImage
//                                             className="w-full h-full object-cover object-top"
//                                             src={
//                                                 'groupName' in suggestedUser
//                                                     ? `http://localhost:5000/${suggestedUser?.groupImage}`
//                                                     : suggestedUser?.profilePicture
//                                             }
//                                             alt={`${suggestedUser?.username}'s profile`}
//                                         />
//                                         <AvatarFallback>
//                                             {'groupName' in suggestedUser
//                                                 ? `${suggestedUser.groupName}`
//                                                 : `${suggestedUser.username}`}
//                                         </AvatarFallback>
//                                     </Avatar>
//                                     {onlineUsers?.includes(suggestedUser?._id) && (
//                                         <div className="w-3 h-3 absolute top-9 left-9 border-[2px] border-white bg-green-500 rounded-full"></div>
//                                     )}
//                                 </div>

//                                 <div className="flex-grow">
//                                     <div className="flex flex-col p-2 rounded-lg cursor-pointer">
//                                         <span className="font-semibold text-black dark:text-white truncate">
//                                             {'groupName' in suggestedUser
//                                                 ? suggestedUser.groupName
//                                                 : suggestedUser.username}
//                                         </span>

//                                         <div className="flex justify-between items-center mt-1">
//                                             <span className="text-gray-500 dark:text-gray-400 text-sm truncate max-w-[70%]">
//                                                 {suggestedUser.lastMessage?.text
//                                                     ? suggestedUser.lastMessage.text.length > 15
//                                                         ? suggestedUser.lastMessage.text.slice(0, 15) + "..."
//                                                         : suggestedUser.lastMessage.text
//                                                     : "No messages yet"}
//                                             </span>

//                                             <span className="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap ml-2 flex-shrink-0">
//                                                 {suggestedUser.lastMessage?.createdAt
//                                                     ? new Date(suggestedUser.lastMessage.createdAt).toLocaleString("en-IN", {
//                                                         day: "2-digit",
//                                                         month: "short",
//                                                         hour: "2-digit",
//                                                         minute: "2-digit",
//                                                     })
//                                                     : ""}
//                                             </span>
//                                         </div>

//                                     </div>

//                                     <div className="text-xs dark:text-white flex justify-between">
//                                         {onlineUsers?.includes(suggestedUser?._id) && (
//                                             <p className="text-xs text-gray-400">Active now</p>
//                                         )}
//                                     </div>
//                                 </div>

//                             </motion.div>
//                         </Link>
//                     ))}
//                 </AnimatePresence>
//             ) : (
//                 <p className="text-gray-500">No following users available.</p>
//             )}
//         </ScrollArea>
//     );
// }

// export default MessagesMember;