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
import { Avatar, AvatarImage } from '../ui/avatar'

export function SearchDialogWithCheckboxesComponent({ socketRef }) {
  const [isOpen, setIsOpen] = useState(false)
  const userDetails = useSelector((state) => state.counter.userDetails);
  const followingUsers = useSelector((state) => state.counter.followingUsers);
  const [searchTerm, setSearchTerm] = useState("")
  const [groupName, setGroupName] = useState("")
  const [members, setMembers] = useState([])
  const [followingUser, setFollowingUser] = useState([])
  const dispatch = useDispatch()

  // Ensure followingUsers is always handled as an array
  const arrOfFollowingUsers = Array.isArray(followingUsers) ? followingUsers : [];
  const filteredResults = followingUser.filter(
    item => item?.username?.toLowerCase()?.includes(searchTerm?.toLowerCase())
  );
  
  const handleCheckboxChange = (id, username) => {
    setMembers(prev => {
      const memberExists = prev.some(item => item.userId === id);
      if (memberExists) {
        return prev.filter(item => item.userId !== id);
      } else {
        return [...prev, { userId: id, username }];
      }
    });
  };
  
  useEffect(() => {
    socketRef.current.on('groupCreated', ({ groupChat }) => {
      const updatedFollowingUsers = [...arrOfFollowingUsers, groupChat];
      dispatch(setFollowingUsers(updatedFollowingUsers));
    });
  }, [arrOfFollowingUsers, dispatch, socketRef]);
  
  const handleCreateGroup = async () => {
    try {
      const response = await axios.post(`/api/conversations/group/create`, {
        groupName,
        members,
        createdBy: userDetails.id
      });
      
      if (response?.data?.success) {
        setIsOpen(false); // Close dialog or modal
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  
  const getFollower = async () => {
    try {
      const response = await axios.get(`/api/conversations/followingUsers/${userDetails.username}`);
      setFollowingUser(response?.data || []);
    } catch (error) {
      console.error("Error fetching followers:", error);
    }
  };
  
  useEffect(() => {
    getFollower();
  }, []);
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="px-2"><FaRegEdit size={20} /></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Group</DialogTitle>
          <DialogDescription>
            This action helps to create a group.
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
                        checked={members.some(item => item.userId === result._id)}
                        onCheckedChange={() => handleCheckboxChange(result._id, result.username)} />
                      <div className='flex justify-center items-center'>
                        <Avatar className="w-10 h-10 sm:w-8 sm:h-8">
                          <AvatarImage
                            src={result.profilePicture || "/placeholder.svg?height=128&width=128"}
                            alt={result.username}
                            className="object-cover object-top"
                            />
                        </Avatar>
                        <label
                          htmlFor={`checkbox-${result._id}`}
                          className="mx-4 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
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

          {/* Selected Members */}
          {members.length > 0 && (
            <div className="mt-4">
              <h4 className="font-medium mb-2">Selected Members:</h4>
              <ul className="list-disc pl-5">
                {members.map(member => (
                  <li key={member.userId}>{member.username}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}


// const handleCheckboxChange = (id) => {
//   setMembers(prev => {
//     const memberExists = prev.some(item => item.userId === id);
//     // console.log(memberExists);
//     if (memberExists) {
//       return prev.filter(item => item.userId !== id);
//     } else {
//       return [...prev, { userId: id }];
//     }
//   });
// };