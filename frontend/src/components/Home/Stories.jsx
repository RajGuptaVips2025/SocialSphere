import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Progress } from '../ui/progress'
import { Button } from '../ui/button'
import { Dialog, DialogContent } from '../ui/dialog'
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

  const getFollowing = async () => {
    try {
      const { data } = await api.get(`/users/${userDetails.id}/following`)

      const userStory = data?.stories.find(
        (story) => story.user._id === userDetails.id
      )
      const otherStories = data?.stories.filter(
        (story) => story.user._id !== userDetails.id
      )

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
            if (currentMediaIndex < stories[currentStoryIndex]?.media.length - 1) {
              setCurrentMediaIndex((prevMedia) => prevMedia + 1)
            } else if (currentStoryIndex < stories.length - 1) {
              setCurrentStoryIndex((prevStory) => prevStory + 1)
              setCurrentMediaIndex(0)
            } else {
              closeStories()
            }
            return 0
          }
        })
      }, 50)
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
        <motion.div
          ref={containerRef}
          className="flex space-x-4 p-1"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          {stories.map((story, index) => (
            <motion.button
              key={story._id}
              className="flex aspect-square flex-col items-center space-y-1"
              onClick={() => openStories(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="rounded-full bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-[2px]"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.05, type: 'spring', stiffness: 250 }}
              >
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
              </motion.div>
              <span className="text-sm w-16 text-center overflow-hidden">
                {story.user.username}
              </span>
            </motion.button>
          ))}
        </motion.div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[350px] p-0 overflow-hidden">
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                key={currentStoryIndex + '-' + currentMediaIndex}
                className="relative aspect-[9/16] bg-background"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <Progress
                  value={progress}
                  className="absolute top-5 left-0 right-0 z-10 h-[2px] w-[98%]"
                />

                {stories.length > 0 &&
                  stories[currentStoryIndex]?.media?.length > 0 && (
                    <>
                      {stories[currentStoryIndex]?.media?.[currentMediaIndex]?.type ===
                      'image' ? (
                        <motion.img
                          key={stories[currentStoryIndex]?.media[currentMediaIndex]?.url}
                          src={
                            stories[currentStoryIndex]?.media[currentMediaIndex]?.url
                          }
                          alt={stories[currentStoryIndex]?.user?.username}
                          className="absolute aspect-auto inset-0 w-full h-full object-contain"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      ) : (
                        <motion.video
                          key={stories[currentStoryIndex]?.media[currentMediaIndex]?.url}
                          src={
                            stories[currentStoryIndex]?.media[currentMediaIndex]?.url
                          }
                          controls
                          autoPlay
                          muted={false}
                          playsInline
                          className="absolute aspect-auto inset-0 w-full h-full object-contain"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}

                      <motion.div
                        className="absolute top-10 left-4"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                      >
                        <Link
                          className="flex items-center space-x-2"
                          to={`/profile/${stories[currentStoryIndex]?.user?.username}`}
                        >
                          <Avatar className="ring-2 ring-primary">
                            <AvatarImage
                              className="object-cover object-top"
                              src={stories[currentStoryIndex]?.user?.profilePicture}
                              alt={stories[currentStoryIndex]?.user?.username}
                            />
                            <AvatarFallback>
                              {stories[
                                currentStoryIndex
                              ]?.user?.username[0].toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <span className="dark:text-white font-semibold">
                            {stories[currentStoryIndex]?.user?.username}
                          </span>
                        </Link>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-4 right-4 text-white rounded-full"
                          onClick={closeStories}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.8 }}
                        >
                          <X className="h-6 w-6" />
                        </Button>

                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute left-1 top-1/2 -translate-y-1/2 text-white rounded-full"
                          onClick={prevStory}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>

                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-1 top-1/2 -translate-y-1/2 text-white rounded-full"
                          onClick={nextStory}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </motion.div>
                    </>
                  )}
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </div>
  )
}
