/* eslint-disable no-unused-vars */
"'use client'"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useNavigate, useParams } from "react-router-dom"
import { useState } from "react"
import { addUser } from "@/features/userDetail/userDetailsSlice"
import { useDispatch } from "react-redux"
import { ReloadIcon } from "@radix-ui/react-icons"
import { toast } from "react-toastify"
import api from "@/api/api"

export function ProfileEdit() {
  const { id } = useParams();
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [isresOk, setIsResOk] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('username', username);
    formData.append('name', name);
    formData.append('bio', bio); // Include bio in the form data
    if (profileImage) {
      formData.append('media', profileImage);
    }

    try {
      setIsResOk(false)
      const response = await api.post(`/users/edit/${id}`, formData, { withCredentials: true });
      const profilePic = response?.data?.user?.profilePicture
      dispatch(addUser({
        fullName: response?.data?.user?.fullName,
        username: response?.data?.user?.username,
        email: response?.data?.user?.email,
        id: response?.data?.user?._id,
        profilePic: profilePic
      }));
      navigate(`/profile/${username}`);
      toast.info("Profile Edited Successfully!")
    } catch (error) {
      console.error('Error updating profile:', error.message);
      if (error.response.statusText === "Unauthorized" || error.response?.status === 403) navigate('/login')
      toast.error("Unable to edit the Profile!")
    } finally {
      setIsResOk(true)
    }
  };


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };
  return (
    (
      <>
        <div className="flex w-full h-full pt-12 sm:pt-12 lg:pt-12">
          <div className="container mx-auto dark:bg-neutral-950 dark:text-white h-screen overflow-y-auto">
            <div className="flex flex-col md:flex-row gap-1">
              <main className="flex-1 bg-white dark:bg-neutral-950 dark:text-white p-6 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-6 dark:text-white">Edit profile</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center gap-4 bg-gray-50 dark:bg-zinc-900 p-4 rounded-lg">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={previewImage} className="object-cover object-top" />
                      <AvatarFallback>HK</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold dark:text-white">{username}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{name}</div>
                    </div>
                    <Button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white">Change photo</Button>
                  </div>
                  <div>
                    <Label htmlFor="username" className="text-gray-700 dark:text-white">Username</Label>
                    <Input value={username} onChange={(e) => setUsername(e.target.value)} id="username" placeholder="username" className="resize-none mt-1 dark:bg-transparent dark:text-white dark:border-white" />
                  </div>
                  <div>
                    <Label htmlFor="name" className="text-gray-700 dark:text-white">Name</Label>
                    <Input value={name} onChange={(e) => setName(e.target.value)} id="name" placeholder="name" className="mt-1 dark:bg-transparent dark:text-white dark:border-white" />
                  </div>
                  <div>
                    <Label htmlFor="bio" className="text-gray-700 dark:text-white">Bio</Label>
                    <Textarea id="bio" placeholder="Bio" className="resize-none mt-1 dark:bg-transparent dark:text-white dark:border-white" />
                    <div className="text-sm text-gray-600 text-right dark:text-white">0 / 150</div>
                  </div>
                  <div>
                    <Label htmlFor="profileImage" className="text-gray-700 dark:text-white">Profile Image</Label>
                    <Input
                      type="file"
                      id="profileImage"
                      name="profileImage"
                      onChange={handleFileChange}
                      className="mt-1 dark:bg-transparent dark:text-white dark:border-white"
                    />
                  </div>
                  {
                    isresOk ?
                      <Button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white">Submit</Button>
                      :
                      <Button disabled className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white">  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> Submit</Button>
                  }
                </form>
              </main>
            </div>
          </div>
        </div>
      </>)
  );
}