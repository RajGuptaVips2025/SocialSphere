/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef, useCallback } from 'react';
import { GoBookmark, GoBookmarkFill } from 'react-icons/go';
import { BsThreeDots } from "react-icons/bs";
import { Button } from '../ui/button';
import { Heart, MessageCircle, MoreHorizontal, Send } from 'lucide-react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setSavedPosts, setWatchHistory } from '@/features/userDetail/userDetailsSlice';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from '../ui/drawer';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import api from '@/api/api';
import { motion } from "framer-motion";

const ReelSection = () => {
    const userDetails = useSelector((state) => state.counter.userDetails);
    const savedPost = useSelector((state) => state.counter.savedPosts);
    const PostDetails = useSelector((state) => state.counter.selectedPost);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [allPosts, setAllPosts] = useState([]);
    const [comment, setComment] = useState('');
    const [commentsArr, setCommentsArr] = useState([]);
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const videoRefs = useRef([]); // Ref for video elements
    const watchTimeouts = useRef({}); // Timeouts for tracking watch time

    // Fetch posts with pagination
    const fetchPosts = useCallback(async () => {
        try {
            setLoading(true);
            const { data: posts } = await api.get(`/posts/getPosts?page=${page}&limit=10`);
            // const reels = posts.filter(post => post?.media[0]?.mediaType === 'video');

            const videoPosts = posts.map(post => {
                // Filter the media array to include only videos
                const videoMedia = post.media.filter(mediaItem => mediaItem.mediaType === "video");

                // If there are video media items, return the post with only video media, else return null
                if (videoMedia.length > 0) {
                    return { ...post, media: videoMedia };  // Store only the video media for this post
                }
                return null;   // Exclude posts without video media
            }).filter(post => post !== null);  // Remove any null posts


            setAllPosts((prevPosts) => [...prevPosts, ...videoPosts]);
            if (posts.length < 10) {
                setHasMore(false);
            }
        } catch (error) {
            console.error('Error fetching posts:', error);
            if (error.response?.statusText === 'Unauthorized' || error.response?.status === 403) navigate('/login');
        } finally {
            setLoading(false);
        }
    }, [page, navigate]);

    // Fetch saved posts
    const getSavePosts = useCallback(async () => {
        try {
            const userId = userDetails.id;
            const { data: { savedPosts } } = await api.get(`/posts/${userId}/save`);
            dispatch(setSavedPosts(savedPosts));
        } catch (error) {
            console.error('Error fetching saved posts:', error);
            if (error.response?.statusText === 'Unauthorized' || error.response?.status === 403) navigate('/login');
        }
    }, [dispatch, navigate, userDetails.id]);

    // Optimistically update likes
    const handleLike = useCallback(async (e, postId) => {
        e.preventDefault();
        const userId = userDetails.id;

        try {
            // API request to like the post
            const { data: updatedPost } = await api.put(`/posts/${postId}/like`, { userId });

            // Update the post locally in the state
            setAllPosts((prevPosts) =>
                prevPosts.map((post) =>
                    post._id === postId ? updatedPost?.post : post
                )
            );
        } catch (error) {
            console.error('Error liking the post:', error);
            if (error.response?.statusText === "Unauthorized" || error.response?.status === 403) navigate('/login');
        }
    }, [navigate, userDetails.id]);

    // Optimistically update saved posts
    const handleSavePosts = useCallback(async (e, postId) => {
        e.preventDefault();
        try {
            const { data: { savedPosts } } = await api.put(`/posts/${userDetails.id}/save`, { postId });
            dispatch(setSavedPosts(savedPosts));
        } catch (error) {
            console.error('Error saving the post:', error);
            if (error.response?.statusText === 'Unauthorized' || error.response?.status === 403) navigate('/login');
        }
    }, [dispatch, navigate, userDetails.id]);

    // Watch time tracking
    const handleWatchStart = useCallback((postId, videoElement) => {
        watchTimeouts.current[postId] = setTimeout(() => {
            addToHistory(postId);
        }, 5000); // 5 seconds watch time
        videoElement.play();
    }, []);

    const handleWatchEnd = useCallback((postId, videoElement) => {
        clearTimeout(watchTimeouts.current[postId]);
        videoElement.pause();
    }, []);

    const addToHistory = useCallback(async (postId) => {
        try {
            const userId = userDetails.id;
            const response = await api.post(`/users/reelHistory/${userId}/${postId}`);
            const watchHistory = response?.data?.user?.reelHistory
            dispatch(setWatchHistory([watchHistory]));
        } catch (error) {
            console.error('Error adding to history:', error);
            if (error.response?.statusText === 'Unauthorized' || error.response?.status === 403) navigate('/login');
        }
    }, [dispatch, navigate, userDetails.id]);

    const handleRemoveComment = async (e, postId, commentId) => {
        e.preventDefault()
        try {
            const response = await api.delete(`/posts/${postId}/comment/${commentId}`);

            if (response.status === 200) {
                setCommentsArr(response?.data?.post?.comments);
                // Dispatch an action to update the post in the Redux store if necessary
            }
        } catch (error) {
            console.error('Error removing comment:', error);
        }
    };

    // Infinite scrolling
    const handleScroll = useCallback(() => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading || !hasMore) {
            return;
        }
        setPage((prevPage) => prevPage + 1);
    }, [loading, hasMore]);

    // Video intersection observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const video = entry.target;
                    const postId = video.dataset.postid;

                    if (entry.isIntersecting) {
                        handleWatchStart(postId, video);
                    } else {
                        handleWatchEnd(postId, video);
                    }
                });
            },
            { threshold: 0.75 }
        );

        videoRefs.current.forEach((video) => {
            if (video) observer.observe(video);
        });

        return () => {
            videoRefs.current.forEach((video) => {
                if (video) observer.unobserve(video);
            });
        };
    }, [allPosts, handleWatchStart, handleWatchEnd]);

    // Fetch comments from the server
    const fetchComments = async () => {
        try {
            const response = await api.get(`/posts/${PostDetails?._id}/comment`);
            setCommentsArr(response?.data?.comments);
        } catch (error) {
            if (error?.response?.statusText === "Unauthorized" || error.response?.status === 403) navigate('/login')
            console.error('Error fetching comments:', error);
        }
    };

    // Submit a new comment
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
            if (error.response.statusText === "Unauthorized" || error.response?.status === 403) navigate('/login')
            setComment(''); // Clear the input in case of an error
        }
    };

    // Initial fetch and pagination setup
    useEffect(() => {
        fetchPosts();
        return () => {
            setAllPosts([]);
        }
    }, [page, fetchPosts]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    useEffect(() => {
        getSavePosts();
    }, [getSavePosts]);

     // Animation Variants
    const reelVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" }
        })
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.3 } }
    };

    const buttonAnim = {
        whileHover: { scale: 1.2 },
        whileTap: { scale: 0.9 },
        transition: { type: "spring", stiffness: 300 }
    };
    
    return (
        <>
        <div className="flex-1 min-h-screen flex flex-col items-center pt-24 pb-4 bg-[#0f172a] dark:bg-[#0f172a] text-white">
            <div className="w-full flex justify-center mt-4">
                <Carousel opts={{ align: "center" }} orientation="vertical" className="relative w-full max-w-sm md:max-w-md lg:max-w-lg">
                    <CarouselContent className="h-[95vh] gap-4">
                        {allPosts?.map((post, index) => (
                            <motion.div
                                key={post._id}
                                variants={reelVariant}
                                initial="hidden"
                                animate="visible"
                                custom={index}
                            >
                                <CarouselItem className="relative flex flex-col items-center justify-center w-full h-[75vh] gap-4 rounded-lg overflow-hidden">
                                    <div className="w-[300px] h-full rounded-lg shadow-lg overflow-hidden">
                                        <motion.div
                                            className="video w-full h-full relative rounded-lg overflow-hidden"
                                            variants={fadeUp}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            <video
                                                ref={(el) => (videoRefs.current[index] = el)}
                                                muted
                                                data-postid={post._id}
                                                src={post?.media[0]?.mediaPath}
                                                loop
                                                className="object-cover w-full h-full"
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                                                <motion.div
                                                    className="flex items-center gap-2 mb-2"
                                                    variants={fadeUp}
                                                    initial="hidden"
                                                    animate="visible"
                                                    transition={{ delay: 0.4 }}
                                                >
                                                    <Link
                                                        to={`/profile/${post?.author?.username}/${post.caption}`}
                                                        className="flex items-center"
                                                    >
                                                        <Avatar className="w-8 h-8">
                                                            <AvatarImage src={post?.author?.profilePicture} alt={post?.username} className="object-cover w-full h-full rounded-full" />
                                                            <AvatarFallback>{post?.username}</AvatarFallback>
                                                        </Avatar>
                                                        <span className="ml-2 text-white text-sm">{post?.author?.username}</span>
                                                    </Link>
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Animated Controls */}
                                    <motion.div
                                        className="absolute right-16 flex flex-col items-center justify-end gap-4"
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.7, duration: 0.5 }}
                                    >
                                        <motion.button {...buttonAnim} onClick={(e) => handleLike(e, post._id)}>
                                            {post?.likes?.includes(userDetails.id) ? (
                                                <FaHeart className="text-red-500 w-6 h-6" />
                                            ) : (
                                                <Heart className="w-6 h-6" />
                                            )}
                                        </motion.button>

                                        <Drawer>
                                            <DrawerTrigger asChild>
                                                <motion.div {...buttonAnim}>
                                                    <MessageCircle className="w-6 h-6 transform -scale-x-100" />
                                                </motion.div>
                                            </DrawerTrigger>
                                            <DrawerContent className="fixed inset-x-0 bottom-0 w-[30vw] mx-auto h-[60vh] max-h-[80vh] bg-white rounded-t-lg shadow-lg flex flex-col">
                                                <DrawerHeader className="p-4 border-b">
                                                    <DrawerTitle>Comments</DrawerTitle>
                                                    <DrawerDescription>This action cannot be undone.</DrawerDescription>
                                                </DrawerHeader>
                                            </DrawerContent>
                                        </Drawer>
                                    </motion.div>
                                </CarouselItem>
                            </motion.div>
                        ))}
                    </CarouselContent>

                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 h-14">
                        <CarouselPrevious className="w-12 h-12 p-2 rounded-full bg-neutral-800 text-white hover:bg-neutral-700 transition" />
                        <CarouselNext className="w-12 h-12 p-2 rounded-full bg-neutral-800 text-white hover:bg-neutral-700 transition" />
                    </div>
                </Carousel>
            </div>
        </div>
        </>
    );
};

export default ReelSection;

