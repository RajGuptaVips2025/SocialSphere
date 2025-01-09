// import { useEffect, useState } from 'react';
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Checkbox } from "@/components/ui/checkbox";
// import { ScrollArea } from '../ui/scroll-area';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { setFollowingUsers } from '@/features/userDetail/userDetailsSlice';
// import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

// export function SearchDialogWithCheckboxesComponent({ socketRef }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const userDetails = useSelector((state) => state.counter.userDetails);
//   const followingUserss = useSelector((state) => state.counter.followingUsers);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [groupName, setGroupName] = useState("");
//   const [members, setMembers] = useState([]);
//   const [followingUser, setFollowingUser] = useState([]);
//   const dispatch = useDispatch();
//   const arrOfFollowingUsers = Object.values(followingUserss);

//   const filteredResults = followingUser.filter(
//     item => item?.username?.toLowerCase()?.includes(searchTerm?.toLowerCase())
//   );

//   const handleCheckboxChange = (member) => {
//     console.log(member)
//     setMembers(prev => {
//       const memberExists = prev.some(item => item._id === member._id);
//       if (memberExists) {
//         return prev.filter(item => item._id !== member._id);
//       } else {
//         return [...prev, member];
//       }
//     });
//   };

//   useEffect(() => {
//     if (socketRef.current) {
//       socketRef.current.on('groupCreated', ({ groupChat }) => {
//         const followingUsers = [...arrOfFollowingUsers, groupChat];
//         dispatch(setFollowingUsers(followingUsers));
//       });
//     }
//   }, [socketRef, arrOfFollowingUsers, dispatch]);

//   const handleCreateGroup = async () => {
//     try {
//       const response = await axios.post(`/api/conversations/group/create`, {
//         groupName,
//         members,
//         createdBy: userDetails.id
//       });

//       if (response?.data?.success) {
//         setIsOpen(false);
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const getFollower = async () => {
//     const response = await axios.get(`/api/conversations/followingUsers/${userDetails.username}`);
//     setFollowingUser(response?.data);
//   };

//   useEffect(() => {
//     getFollower();
//   }, []);

//   return (
//     <Dialog open={isOpen} onOpenChange={setIsOpen}>
//       <DialogTrigger asChild>
//         <Button variant="outline">Create Group</Button>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[425px] dark:text-white">
//         <DialogHeader>
//           <DialogTitle>Create Group</DialogTitle>
//           <DialogDescription>
//             This action helps to create a group
//           </DialogDescription>
//         </DialogHeader>
//         <div className="grid gap-4 py-4">
//           {/* Group Name and Search Input in the same row */}
//           <div className="flex items-center gap-2">
//             <Input
//               placeholder="Group Name"
//               value={groupName}
//               onChange={(e) => setGroupName(e.target.value)}
//               className="w-1/2"
//             />
//             <Input
//               placeholder="Type to search..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-1/2"
//             />
//             <Button type="button" onClick={handleCreateGroup}>Create</Button>
//           </div>

//           {/* Filtered search results */}
//           {searchTerm && (
//             <ScrollArea className="h-auto w-full rounded-md border p-4">
//               <div className="mt-4 space-y-2">
//                 {filteredResults.length > 0 ? (
//                   filteredResults.map((result) => (
//                     <div
//                       key={result._id}
//                       className="flex items-center space-x-2 p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer"
//                     >
//                       <Checkbox
//                         id={`checkbox-${result._id}`}
//                         checked={members.some(item => item._id === result._id)}
//                         onCheckedChange={() => handleCheckboxChange(result)}
//                       />
//                       <div>
//                         <label
//                           htmlFor={`checkbox-${result._id}`}
//                           className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
//                         >
//                           {result?.username}
//                         </label>
//                       </div>
//                     </div>
//                   ))
//                 ) : (
//                   <p className="text-sm text-neutral-500 dark:text-neutral-400">No results found</p>
//                 )}
//               </div>
//             </ScrollArea>
//           )}
//           {members.length > 0 && (
//             <div className="mt-4">
//               <h4 className="font-medium mb-2">Selected Items:</h4>
//               {/* <ul className="list-disc pl-5"> */}
//               <ul className="list-disc pl-5">
//                 {members.map(member => (
//                   <li key={member._id} className="text-sm flex gap-1 items-center justify-start">
//                     <Avatar className="bg-gray-200 dark:bg-neutral-950 dark:text-white w-6 h-6">
//                       <AvatarImage className="object-cover object-top" src={`${member.profilePicture}`} />
//                       <AvatarFallback>{member.username}</AvatarFallback>
//                     </Avatar>
//                     {/* <img src={`${member.profilePicture}`} className='w-6 h-6 rounded-full object-cover object-top' alt="" /> */}
//                     {member.username}</li>
//                 ))}
//               </ul>
//               {/* {members.map(member => (
//                   <p key={member._id}>{member.username}</p>
//                 ))}
//               </ul> */}
//             </div>
//           )}
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }


'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from '../ui/scroll-area'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setFollowingUsers } from '@/features/userDetail/userDetailsSlice'
import { FaRegEdit } from 'react-icons/fa'

export function SearchDialogWithCheckboxesComponent({ socketRef }) {
  const [isOpen, setIsOpen] = useState(false)
  const userDetails = useSelector((state) => state.counter.userDetails);
  const followingUserss = useSelector((state) => state.counter.followingUsers);
  const [searchTerm, setSearchTerm] = useState("")
  const [groupName, setGroupName] = useState("")
  const [members, setMembers] = useState([])
  const [followingUser, setFollowingUser] = useState([])
  const dispatch = useDispatch()
  const arrOfFollowingUsers = Object.values(followingUserss)
  const filteredResults = followingUser.filter(
    item => item?.username?.toLowerCase()?.includes(searchTerm?.toLowerCase()))

  const handleCheckboxChange = (id) => {
    setMembers(prev => {
      const memberExists = prev.some(item => item.userId === id);
      if (memberExists) {
        // Remove the object with matching userId
        return prev.filter(item => item.userId !== id);
      } else {
        // Add new object with userId
        return [...prev, { userId: id }];
      }
    });
  };

  useEffect(() => {
    socketRef.current.on('groupCreated', ({ groupChat }) => {
      const followingUsers = [...arrOfFollowingUsers, groupChat]
      dispatch(setFollowingUsers(followingUsers))
    });
  }, []);

  const handleCreateGroup = async () => {
    try {
      const response = await axios.post(`/api/conversations/group/create`, {
        groupName,
        members,
        createdBy: userDetails.id
      });

      if (response?.data?.success) {
        setIsOpen(false);  // Close dialog or modal
      }
    } catch (error) {
      console.log(error.message);
    }
  };


  const getFollower = async () => {
    const response = await axios.get(`/api/conversations/followingUsers/${userDetails.username}`);
    setFollowingUser(response?.data)
  }
  useEffect(() => {
    getFollower()
  }, [])


  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="px-2"><FaRegEdit size={20} /></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Group</DialogTitle>
          <DialogDescription>
            This action help's to create a group
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* Group Name and Search Input in the same row */}
          <div className="flex items-center gap-2">
            <Input
              placeholder="Group Name"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              className="w-1/2"
            />
            <Input
              placeholder="Type to search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-1/2"
            />
            <Button onClick={handleCreateGroup}>Create</Button>
          </div>

          {/* Filtered search results */}
          {searchTerm && (
            <ScrollArea className="h-auto w-full rounded-md border p-4">
              <div className="mt-4 space-y-2">
                {filteredResults.length > 0 ? (
                  filteredResults.map((result) => (
                    <div
                      key={result._id}
                      className="flex items-center space-x-2 p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800">
                      <Checkbox
                        id={`checkbox-${result._id}`}
                        // checked={members.includes(result.id)}
                        checked={members.some(item => item.userId === result._id)}
                        onCheckedChange={() => handleCheckboxChange(result._id)} />
                      <div>
                        <label
                          htmlFor={`checkbox-${result._id}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          {result?.username}
                        </label>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">No results found</p>
                )}
              </div>
            </ScrollArea>
          )}
          {members.length > 0 && (
            <div className="mt-4">
              <h4 className="font-medium mb-2">Selected Items:</h4>
              <ul className="list-disc pl-5">
                {members.map(id => (
                  <p key={id.userId}>{id.userId}</p>
                ))}
              </ul>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}