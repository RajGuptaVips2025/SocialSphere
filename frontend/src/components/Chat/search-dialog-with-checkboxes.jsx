/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
import { useDispatch, useSelector } from 'react-redux'
import { setFollowingUsers } from '@/features/userDetail/userDetailsSlice'
import { FaRegEdit } from 'react-icons/fa'
import { Avatar, AvatarImage } from '../ui/avatar'
import api from '@/api/api'

export function SearchDialogWithCheckboxesComponent({ socketRef }) {
  const [isOpen, setIsOpen] = useState(false)
  const userDetails = useSelector((state) => state.counter.userDetails);
  const followingUsers = useSelector((state) => state.counter.followingUsers);
  const [searchTerm, setSearchTerm] = useState("")
  const [groupName, setGroupName] = useState("")
  const [members, setMembers] = useState([])
  const [followingUser, setFollowingUser] = useState([])
  const dispatch = useDispatch()

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
    if (socketRef.current) {
      socketRef.current.on('groupCreated', ({ groupChat }) => {
        const updatedFollowingUsers = [...arrOfFollowingUsers, groupChat];
        console.log(updatedFollowingUsers, "line 53");
        dispatch(setFollowingUsers(updatedFollowingUsers));
      });
    }
  }, [arrOfFollowingUsers, dispatch, socketRef]);

  const handleCreateGroup = async () => {
    try {
      const response = await api.post(`/conversations/group/create`, {
        groupName,
        members,
        createdBy: userDetails.id
      });

      if (response?.data?.success) {
        setIsOpen(false);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const getFollower = async () => {
    try {
      const response = await api.get(`/conversations/followingUsers/${userDetails.username}`);
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
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          {/* <Button variant="outline" className="px-2"><FaRegEdit size={20} /></Button> */}
          <Button variant="ghost" className="px-2 hover:bg-slate-700 dark:hover:bg-slate-700">
            <FaRegEdit size={20} className="text-white" />
          </Button>
        </motion.div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[600px] h-[80vh] md:h-[500px] max-h-[90vh] flex flex-col overflow-hidden">
        {/* <DialogContent className="sm:max-w-[600px] h-[80vh] md:h-[500px] max-h-[90vh] flex flex-col overflow-hidden bg-[#0f172a] border-slate-700 text-white"> */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="dialog-motion"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="h-full flex flex-col"
            >
              <DialogHeader>
                <DialogTitle className="text-white">Create Group</DialogTitle>
                <DialogDescription>
                  This action helps to create a group.
                </DialogDescription>
              </DialogHeader>

              {/* Top Section (Inputs + Button) */}
              <motion.div
                className="flex flex-col sm:flex-row items-center gap-2 p-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Input
                  placeholder="Group Name"
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  className="w-full sm:w-1/2 text-white"
                />
                <Input
                  placeholder="Type to search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full sm:w-1/2 text-white"
                />
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button onClick={handleCreateGroup} className="w-full sm:w-auto">
                    Create
                  </Button>
                </motion.div>
              </motion.div>

              {/* Scrollable Section */}
              <motion.div
                className="flex-1 overflow-y-auto p-4 text-white border-t border-neutral-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {searchTerm ? (
                  filteredResults.length > 0 ? (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: { staggerChildren: 0.05 },
                        },
                      }}
                    >
                      {filteredResults.map((result) => (
                        <motion.div
                          key={result._id}
                          variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          whileHover={{ scale: 1.02 }}
                          className="flex items-center space-x-2 p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800"
                        >
                          <Checkbox
                            id={`checkbox-${result._id}`}
                            checked={members.some((item) => item.userId === result._id)}
                            onCheckedChange={() =>
                              handleCheckboxChange(result._id, result.username)
                            }
                          />
                          <div className="flex justify-center items-center">
                            <Avatar className="w-10 h-10 sm:w-8 sm:h-8">
                              <AvatarImage
                                src={
                                  result.profilePicture ||
                                  "/placeholder.svg?height=128&width=128"
                                }
                                alt={result.username}
                                className="object-cover object-top"
                              />
                            </Avatar>
                            <label
                              htmlFor={`checkbox-${result._id}`}
                              className="mx-4 text-sm font-medium leading-none"
                            >
                              {result?.username}
                            </label>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      No results found
                    </p>
                  )
                ) : (
                  <p className="text-neutral-500 text-sm">
                    Type a name to search for members...
                  </p>
                )}

                {/* Selected Members */}
                {members.length > 0 && (
                  <motion.div
                    className="mt-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h4 className="font-medium mb-2">Selected Members:</h4>
                    <ul className="list-disc pl-5">
                      {members.map((member) => (
                        <motion.li
                          key={member.userId}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                        >
                          {member.username}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}