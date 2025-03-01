import { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Progress } from '../ui/progress'
import { Button } from '../ui/button'
import { Dialog, DialogContent } from '../ui/dialog'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import api from '@/api/api'

export default function Stories() {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0)
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const userDetails = useSelector((state) => state.counter.userDetails)
  const [stories, setStories] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null)
  // console.log(stories[0]?.media?.[0]?.type);

    const getFollowing = async () => {
    try {
      const { data } = await api.get(`/users/${userDetails.id}/following`)
  
      // Separate user's own story
      const userStory = data?.stories.find(
        (story) => story.user._id === userDetails.id
      )
      const otherStories = data?.stories.filter(
        (story) => story.user._id !== userDetails.id
      )
  
      // Combine user's story first, followed by others
      const sortedStories = userStory ? [userStory, ...otherStories] : otherStories
      setStories(sortedStories)
    } catch (error) {
      console.error('Error fetching following users:', error)
    }
  }
  

  useEffect(() => {
    if (userDetails.id) {
      getFollowing()
    }
  }, [userDetails.id])

  useEffect(() => {
    let timer
    if (isOpen) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev < 100) {
            return prev + 1
          } else {
            // Move to the next media item or next story
            if (
              currentMediaIndex < stories[currentStoryIndex]?.media.length - 1
            ) {
              setCurrentMediaIndex((prevMedia) => prevMedia + 1)
            } else if (currentStoryIndex < stories.length - 1) {
              setCurrentStoryIndex((prevStory) => prevStory + 1)
              setCurrentMediaIndex(0)
            } else {
              closeStories() // Close when all stories are viewed
            }
            return 0
          }
        })
      }, 50) // Adjust this value to change the story duration
    }

    return () => {
      if (timer) clearInterval(timer)
    }
  }, [isOpen, currentStoryIndex, currentMediaIndex, stories])

  const openStories = (index) => {
    setIsOpen(true)
    setCurrentStoryIndex(index)
    setCurrentMediaIndex(0)
    setProgress(0)
  }

  const closeStories = () => {
    setIsOpen(false)
    setProgress(0)
  }

  const nextStory = () => {
    if (currentMediaIndex < stories[currentStoryIndex]?.media.length - 1) {
      setCurrentMediaIndex((prev) => prev + 1)
      setProgress(0)
    } else if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex((prev) => prev + 1)
      setCurrentMediaIndex(0)
      setProgress(0)
    } else {
      closeStories()
    }
  }

  const prevStory = () => {
    if (currentMediaIndex > 0) {
      setCurrentMediaIndex((prev) => prev - 1)
      setProgress(0)
    } else if (currentStoryIndex > 0) {
      setCurrentStoryIndex((prev) => prev - 1)
      setCurrentMediaIndex(stories[currentStoryIndex - 1]?.media.length - 1)
      setProgress(0)
    }
  }

  return (
    <div className="relative mt-1">
      <ScrollArea className="w-11/12 whitespace-nowrap">
        <div ref={containerRef} className="flex space-x-4 p-1">
          {stories.map((story, index) => (
            <button
              key={story._id}
              className="flex aspect-square flex-col items-center space-y-1"
              onClick={() => openStories(index)}
            >
              <div className="rounded-full bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-[2px]">
                <Avatar className="w-16 h-16 border-2 border-black">
                  <AvatarImage
                    className="object-cover object-top"
                    src={story.user.profilePicture}
                    alt={story.user.username}
                  />
                  <AvatarFallback>
                    {story.user.username[0].toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>
              <span className="text-sm w-16 text-center overflow-hidden">
                {story.user.username}
              </span>
            </button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[350px] p-0 overflow-hidden">
          <div className="relative aspect-[9/16] bg-background">
            <Progress
              value={progress}
              className="absolute top-5 left-0 right-0 z-10 h-[2px] w-[98%]"
            />
            {stories.length > 0 &&
              stories[currentStoryIndex]?.media?.length > 0 && (
                <>
                  {stories[currentStoryIndex]?.media?.[currentMediaIndex]?.type === "image" ? (<img
                    src={
                      stories[currentStoryIndex]?.media[currentMediaIndex]?.url
                    }
                    alt={stories[currentStoryIndex]?.user?.username}
                    className="absolute aspect-auto inset-0 w-full h-full object-contain"
                  />) : (<video src={
                    stories[currentStoryIndex]?.media[currentMediaIndex]?.url
                  } 
                  controls // Adds play, pause, and volume controls
                  autoPlay // Automatically plays the video
                  muted={false} // Ensures audio is not muted
                  playsInline // Allows playback within inline elements (important for mobile browsers)
                  className="absolute aspect-auto inset-0 w-full h-full object-contain" />
                  )}
                  {/* <img
                    src={
                      stories[currentStoryIndex]?.media[currentMediaIndex]?.url
                    }
                    alt={stories[currentStoryIndex]?.user?.username}
                    className="absolute aspect-auto inset-0 w-full h-full object-contain"
                  /> */}
                  <div className="absolute top-10 left-4 ">
                    <Link
                      className="flex items-center space-x-2"
                      to={`/profile/${stories[currentStoryIndex]?.user?.username}`}
                    >
                      <Avatar className="ring-2 ring-primary">
                        <AvatarImage
                          className="object-cover object-top"
                          src={
                            stories[currentStoryIndex]?.user?.profilePicture
                          }
                          alt={stories[currentStoryIndex]?.user?.username}
                        />
                        <AvatarFallback>
                          {stories[currentStoryIndex]?.user?.username[0].toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <span className="dark:text-white font-semibold">
                        {stories[currentStoryIndex]?.user?.username}
                      </span>
                    </Link>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 text-white rounded-full"
                    onClick={closeStories}
                  >
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-1 top-1/2 -translate-y-1/2 text-white rounded-full"
                    onClick={prevStory}
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Previous story</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1/2 -translate-y-1/2 text-white rounded-full"
                    onClick={nextStory}
                  >
                    <ChevronRight className="h-4 w-4" />
                    <span className="sr-only">Next story</span>
                  </Button>
                </>
              )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}