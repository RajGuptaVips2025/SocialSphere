import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { Volume2, VolumeX } from 'lucide-react';
import { Dialog, DialogContent, DialogOverlay, DialogPortal } from '../ui/dialog';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from '../ui/drawer';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import api from '@/api/api';
import PropTypes from 'prop-types';

function PostComment({ selectedMedia, isDialogOpen, setIsDialogOpen }) {
  const [comment, setComment] = useState('');
  const [isMuted, setIsMuted] = useState(true);
  const [commentsArr, setCommentsArr] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const PostDetails = useSelector((state) => state.counter.selectedPost);
  const userDetails = useSelector((state) => state.counter.userDetails);
  const [liked, setLiked] = useState(PostDetails?.likes || []);
  const navigate = useNavigate();

  // ✅ Detect screen size dynamically
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchComments = async () => {
    if (!PostDetails?._id) return;
    try {
      const response = await api.get(`/posts/${PostDetails._id}/comment`);
      setCommentsArr(response?.data?.comments);
    } catch (error) {
      if (error?.response?.statusText === "Unauthorized" || error.response?.status === 403)
        navigate('/login');
      console.error('Error fetching comments:', error);
    }
  };

  const handleCommentSubmit = async (e, postId) => {
    e.preventDefault();
    if (!comment.trim()) return;
    try {
      await api.post(`/posts/${postId}/comment`, {
        userId: userDetails.id,
        text: comment,
      });
      fetchComments();
      setComment('');
    } catch (error) {
      console.error('Error adding comment:', error);
      if (error.response?.statusText === "Unauthorized" || error.response?.status === 403)
        navigate('/login');
      setComment('');
    }
  };

  const handleLike = async (e, postId) => {
    e.preventDefault();
    const userId = userDetails.id;
    try {
      await api.put(`/posts/${postId}/like`, { userId });
      setLiked(prevLiked => {
        const userHasLiked = prevLiked.includes(userId);
        return userHasLiked
          ? prevLiked.filter(id => id !== userId)
          : [...prevLiked, userId];
      });
    } catch (error) {
      console.error('Error liking/unliking the post:', error);
      if (error.response?.statusText === "Unauthorized" || error.response?.status === 403)
        navigate('/login');
    }
  };

  useEffect(() => {
    if (PostDetails?.likes) setLiked(PostDetails.likes);
  }, [PostDetails]);

  useEffect(() => {
    if (PostDetails?._id) fetchComments();
  }, [PostDetails, liked]);

  // ✅ Conditional Rendering: Drawer for mobile, Dialog for desktop
  if (!selectedMedia) return null;

  return (
    <>
      {isMobile ? (
        /* ======= MOBILE VIEW: Drawer ======= */
        <Drawer open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DrawerContent className="fixed inset-x-0 bottom-0 w-full sm:w-[30vw] mx-auto h-[60vh] max-h-[80vh] bg-[#1e293b] text-white rounded-t-lg shadow-lg flex flex-col">
            <DrawerHeader className="p-4 border-b border-zinc-700">
              <DrawerTitle className="text-lg font-semibold text-white">Comments</DrawerTitle>
            </DrawerHeader>

            <div className="flex-1 overflow-y-auto p-4">
              {commentsArr?.length > 0 ? (
                commentsArr.map((comment) => (
                  <div key={comment._id} className="mb-4 flex items-start gap-3">
                    <Link to={`/profile/${comment?.user?.username}`}>
                      <Avatar>
                        <AvatarImage src={comment?.profilePicture} />
                        <AvatarFallback>{comment?.user?.username[0]}</AvatarFallback>
                      </Avatar>
                    </Link>
                    <div>
                      <p className='text-sm'>
                        <strong>{comment?.user?.username}</strong>
                        <span className='ml-2 font-light'>{comment.text}</span>
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-400">No comments yet.</p>
              )}
            </div>

            <form
              onSubmit={(e) => handleCommentSubmit(e, PostDetails._id)}
              className="border-t border-zinc-700 p-3 flex items-center"
            >
              <input
                type="text"
                placeholder="Add a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="flex-1 bg-transparent outline-none text-sm text-white"
              />
              <Button
                type="submit"
                variant="ghost"
                className={`text-blue-500 font-bold text-sm ${!comment.trim() && "text-zinc-600"}`}
                disabled={!comment.trim()}
              >
                Post
              </Button>
            </form>
          </DrawerContent>
        </Drawer>
      ) : (
        /* ======= DESKTOP VIEW: Dialog ======= */
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogPortal>
            <DialogOverlay className="fixed inset-0 bg-black/60" />
            <DialogContent
              className="
                fixed top-1/2 left-1/2 
                -translate-x-1/2 -translate-y-1/2 
                bg-[#1e293b] border-none shadow-none 
                w-[90vw] max-w-[1200px] h-[90vh]
                flex flex-col justify-center items-center
                sm:rounded-sm overflow-hidden p-0
              "
            >
              {/* Existing full Dialog layout from your original code */}
              {/* (keep your carousel, comments, and like logic here unchanged) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full h-full flex flex-col"
              >
                {/* ...keep your original Dialog content here... */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="w-full h-full flex flex-col" // Root is always flex-col now
                >
                  {/* ✅ DESIGN FIX: Author section for mobile view */}
                  <div className="author sm:hidden border-b-[.1px] border-zinc-800 w-full h-[70px] flex items-center px-4 flex-shrink-0">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src={PostDetails?.author?.profilePicture} alt={`${PostDetails?.author?.username}'s profile`} />
                        <AvatarFallback>{PostDetails?.author?.username}</AvatarFallback>
                      </Avatar>
                      <p className="text-sm font-semibold text-white">{PostDetails?.author?.username}</p>
                    </div>
                  </div>

                  {/* Container for media and comments */}
                  <div className="flex flex-col sm:flex-row w-full flex-grow overflow-hidden">
                    {/* Left side - Media */}
                    <div
                      className="multimedia w-full sm:w-3/5 h-[50vh] sm:h-full bg-black flex-shrink-0"
                    >
                      {selectedMedia?.media?.length > 1 ? (
                        <Carousel className="w-full h-full">
                          <CarouselContent>
                            {selectedMedia?.media.map((mediaItem, index) => (
                              <CarouselItem key={index} className="h-full">
                                <Card className="rounded-none border-none h-full flex justify-center items-center bg-black">
                                  <CardContent
                                    onDoubleClick={(e) => handleLike(e, PostDetails._id)}
                                    className="p-0 relative h-full w-full overflow-hidden flex justify-center items-center"
                                  >
                                    {mediaItem?.mediaType === 'video' ? (
                                      <>
                                        <video
                                          src={mediaItem?.mediaPath}
                                          className="w-full h-full object-contain"
                                          loop
                                          autoPlay
                                          muted={isMuted}
                                          playsInline
                                          preload="auto"
                                        />
                                        <Button
                                          variant="ghost"
                                          size="icon"
                                          className="absolute w-8 h-8 bottom-2 right-2 rounded-full bg-black/50 hover:bg-black/70"
                                          onClick={() => setIsMuted(!isMuted)}
                                        >
                                          {isMuted ? <VolumeX className="h-4 w-4 text-white" /> : <Volume2 className="h-4 w-4 text-white" />}
                                        </Button>
                                      </>
                                    ) : (
                                      <motion.img
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.4 }}
                                        src={mediaItem?.mediaPath}
                                        alt={`Post ${index + 1}`}
                                        className="w-full h-full object-contain"
                                        loading="lazy"
                                      />
                                    )}
                                  </CardContent>
                                </Card>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious className="left-1 dark:text-white" />
                          <CarouselNext className="right-1 dark:text-white" />
                        </Carousel>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.4 }}
                          className="w-full h-full flex justify-center items-center bg-black"
                        >
                          {selectedMedia?.media[0]?.mediaType === 'video' ? (
                            <video src={selectedMedia?.media[0]?.mediaPath} autoPlay controls className="w-full h-full object-contain" />
                          ) : (
                            <img
                              src={selectedMedia?.media[0]?.mediaPath}
                              alt="Selected media"
                              className="w-full h-full object-contain"
                            />
                          )}
                        </motion.div>
                      )}
                    </div>

                    {/* Right side - Comments & actions */}
                    <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="w-full sm:w-2/5 h-full bg-[#1e293b] text-white flex flex-col justify-between"
                    >
                      {/* ✅ DESIGN FIX: Author section for desktop view */}
                      <div className="author hidden sm:flex border-b-[.1px] border-zinc-800 w-full h-[70px] items-center px-4 flex-shrink-0">
                        <div className="flex items-center gap-2">
                          <Avatar>
                            <AvatarImage src={PostDetails?.author?.profilePicture} alt={`${PostDetails?.author?.username}'s profile`} />
                            <AvatarFallback>{PostDetails?.author?.username}</AvatarFallback>
                          </Avatar>
                          <p className="text-sm font-semibold">{PostDetails?.author?.username}</p>
                        </div>
                      </div>

                      <div className={`comments-section flex-1 overflow-y-auto p-4 ${commentsArr?.length === 0 ? 'flex justify-center items-center' : ''}`}>
                        <AnimatePresence>
                          {commentsArr?.length > 0 ? (
                            commentsArr.map((comment) => (
                              <motion.div
                                key={comment._id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.2 }}
                                className="mb-4 flex items-start gap-3"
                              >
                                <Link to={`/profile/${comment?.user?.username}`}>
                                  <Avatar>
                                    <AvatarImage src={comment?.profilePicture} alt={`${comment?.user?.username}'s profile`} />
                                    <AvatarFallback>{comment?.user?.username[0]}</AvatarFallback>
                                  </Avatar>
                                </Link>
                                <div className="flex flex-col">
                                  <p className='text-sm'>
                                    <strong className='hover:text-zinc-400 duration-150'>{comment?.user?.username}</strong>
                                    <span className='ml-2 font-light'>{comment.text}</span>
                                  </p>
                                </div>
                              </motion.div>
                            ))
                          ) : (
                            <p className="text-center text-gray-400">No comments yet.</p>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="actions-and-input flex-shrink-0">
                        <motion.div
                          className="actions border-t-[.1px] border-zinc-800 w-full px-4 py-3"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
                        >
                          <div className="flex justify-between items-center">
                            <div className="flex gap-3">
                              <motion.button
                                whileTap={{ scale: 0.85 }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400 }}
                                className="focus:outline-none"
                                onClick={(e) => handleLike(e, PostDetails?._id)}
                              >
                                {liked.includes(userDetails.id) ? (
                                  <FaHeart size={25} className="text-red-500 transition-transform duration-150" />
                                ) : (
                                  <FaRegHeart size={25} className="hover:text-zinc-500 transition-transform duration-150" />
                                )}
                              </motion.button>
                              <motion.button
                                whileTap={{ scale: 0.9 }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                <IoChatbubbleOutline size={25} className="hover:text-zinc-500 transition-colors duration-100" style={{ transform: "scaleX(-1)" }} />
                              </motion.button>
                            </div>
                          </div>
                          <motion.div
                            className="my-2 text-sm font-semibold"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                          >
                            <p>{liked.length || 0} likes</p>
                          </motion.div>
                        </motion.div>
                        <motion.form
                          onSubmit={(e) => handleCommentSubmit(e, PostDetails._id)}
                          className="comment-input border-t-[.1px] border-zinc-800 w-full px-4 py-3 flex items-center"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
                        >
                          <input
                            type="text"
                            placeholder="Add a comment..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className="flex-1 bg-transparent outline-none text-sm text-white"
                          />
                          <Button
                            type="submit"
                            variant="ghost"
                            className={`text-blue-500 font-bold text-sm ${!comment.trim() && "text-zinc-600"}`}
                            disabled={!comment.trim()}
                          >
                            Post
                          </Button>
                        </motion.form>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </DialogContent>
          </DialogPortal>
        </Dialog>
      )}
    </>
  );
}

PostComment.propTypes = {
  selectedMedia: PropTypes.shape({
    _id: PropTypes.string,
    author: PropTypes.object,
    likes: PropTypes.array,
    media: PropTypes.arrayOf(
      PropTypes.shape({
        mediaPath: PropTypes.string,
        mediaType: PropTypes.string,
      })
    ),
  }),
  isDialogOpen: PropTypes.bool.isRequired,
  setIsDialogOpen: PropTypes.func.isRequired,
};

export default PostComment;