import { useEffect, useState, useRef, useCallback } from 'react';
import { GoBookmark, GoBookmarkFill } from 'react-icons/go';
import { BsThreeDots } from "react-icons/bs";
// import axios from 'axios';
import { Button } from '../ui/button';
import { Heart, MessageCircle, MoreHorizontal, Send } from 'lucide-react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setSavedPosts, setWatchHistory } from '@/features/userDetail/userDetailsSlice';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '../ui/drawer';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import api from '@/api/api';

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
    return (
        <>
            {/* <Sidebar /> */}
            <div className="flex-1 min-h-screen flex flex-col items-center py-4 md:ml-[72px] lg:ml-60 ml-auto dark:bg-neutral-950 dark:text-white">
                <div className="w-full flex justify-center mt-4">
                    <Carousel
                        opts={{
                            align: "center", // Center the current reel, partially showing adjacent reels
                        }}
                        orientation="vertical"
                        className="relative w-full max-w-sm md:max-w-md lg:max-w-lg"
                    >
                        <CarouselContent className="h-[95vh] gap-4">
                            {allPosts?.map((post, index) => (
                                <CarouselItem
                                    key={post._id}
                                    className="relative flex flex-col items-center justify-center w-full h-[75vh] gap-4 rounded-lg overflow-hidden"
                                >
                                    {/* Post Content */}
                                    <div className="w-[300px] h-full rounded-lg shadow-lg overflow-hidden">
                                        <div className="video w-full h-full relative rounded-lg overflow-hidden">
                                            <video
                                                ref={(el) => (videoRefs.current[index] = el)} // Assign ref to each video
                                                muted
                                                data-postid={post._id} // Store postId for reference in intersection observer
                                                src={post?.media[0]?.mediaPath}
                                                loop
                                                className="object-cover w-full h-full"
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                                                {/* Author Info */}
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Link
                                                        to={`/profile/${post?.author?.username}/${post.caption}`}
                                                        className="flex items-center"
                                                    >
                                                        <Avatar className="w-8 h-8">
                                                            <AvatarImage
                                                                src={post?.author?.profilePicture}
                                                                alt={post?.username}
                                                                className="object-cover w-full h-full rounded-full"
                                                            />
                                                            <AvatarFallback>{post?.username}</AvatarFallback>
                                                        </Avatar>
                                                        <span className="ml-2 text-white text-sm">
                                                            {post?.author?.username}
                                                        </span>
                                                    </Link>
                                                    <Button
                                                        variant="outline"
                                                        className="ml-2 px-4 py-1 text-xs text-white bg-transparent border"
                                                    >
                                                        Follow
                                                    </Button>
                                                </div>
                                                {/* Caption */}
                                                <p className="text-white text-sm mb-2">{post.caption}</p>
                                                {/* Song Info */}
                                                <div className="flex items-center text-white">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="lucide lucide-music"
                                                    >
                                                        <path d="M9 18V5l12-2v13" />
                                                        <circle cx="6" cy="18" r="3" />
                                                        <circle cx="18" cy="16" r="3" />
                                                    </svg>
                                                    <span className="ml-2 text-sm">
                                                        James Quinn - Dreamer&apos;s Path
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Controls */}
                                    <div className="absolute right-16 flex flex-col items-center justify-end gap-4">
                                        {/* Like Button */}
                                        <div className="flex flex-col items-center">
                                            <button
                                                onClick={(e) => handleLike(e, post._id)}
                                                className="transition-transform hover:scale-110"
                                            >
                                                {post?.likes?.includes(userDetails.id) ? (
                                                    <FaHeart className="text-red-500 w-6 h-6" />
                                                ) : (
                                                    <Heart className="w-6 h-6" />
                                                )}
                                            </button>
                                            <p className="text-sm">{post?.comments?.length}</p>
                                        </div>

                                        <Drawer>
                                            <DrawerTrigger>
                                                <MessageCircle className="w-6 h-6 transform -scale-x-100" />
                                                <p className="text-sm">{post?.comments?.length}</p>
                                            </DrawerTrigger>
                                            <DrawerContent className="fixed inset-x-0 bottom-0 w-[30vw] mx-auto h-[60vh] max-h-[80vh] bg-white rounded-t-lg shadow-lg flex flex-col">
                                                <DrawerHeader className="p-4 border-b">
                                                    <DrawerTitle>Comments</DrawerTitle>
                                                    <DrawerDescription>This action cannot be undone.</DrawerDescription>
                                                </DrawerHeader>
                                                <div
                                                    className={`comments-section flex-1 overflow-y-auto p-4 ${post?.comments?.length === 0 ? 'flex justify-center items-center' : ''
                                                        }`}
                                                >
                                                    {post?.comments?.length > 0 ? (
                                                        post?.comments?.map((comment) => (
                                                            <div key={comment._id} className="mb-4">
                                                                <div className="flex justify-between items-start">
                                                                    <div className="flex items-start gap-3 flex-1">
                                                                        <Link to={`/profile/${comment?.user?.username}`}>
                                                                            <Avatar>
                                                                                <AvatarImage src={comment?.profilePicture} alt={`${comment?.user?.username}'s profile`} />
                                                                                <AvatarFallback>{comment?.user?.username}</AvatarFallback>
                                                                            </Avatar>
                                                                        </Link>
                                                                        <div className="flex flex-col">
                                                                            <p className="flex items-center gap-2">
                                                                                <strong className="hover:text-zinc-400 text-sm duration-150">{comment?.user?.username}</strong>
                                                                                <span className="font-light text-sm">{comment.text}</span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex items-center gap-2">
                                                                        <Button variant="ghost" size="icon" className="hover:text-zinc-500 transition-colors duration-100">
                                                                            <FaRegHeart size={10} />
                                                                            <span className="sr-only">Like comment</span>
                                                                        </Button>
                                                                        <DropdownMenu>
                                                                            <DropdownMenuTrigger asChild>
                                                                                <Button variant="ghost" size="icon" className="p-0">
                                                                                    <MoreHorizontal className="w-5 h-5" />
                                                                                    <span className="sr-only">More options</span>
                                                                                </Button>
                                                                            </DropdownMenuTrigger>
                                                                            <DropdownMenuContent align="end" className="w-60">
                                                                                <DropdownMenuItem className="text-red-600 justify-center font-bold focus:text-red-600 cursor-pointer">
                                                                                    Report
                                                                                </DropdownMenuItem>
                                                                                <DropdownMenuSeparator />
                                                                                {/* <DropdownMenuItem onClick={(e) => handleRemoveComment(e, PostDetails?._id, comment?._id)} className="justify-center cursor-pointer text-red-600 font-semibold focus:text-red-600">Delete Message</DropdownMenuItem> */}
                                                                                <DropdownMenuSeparator />
                                                                                <DropdownMenuItem className="justify-center cursor-pointer">Cancel</DropdownMenuItem>
                                                                            </DropdownMenuContent>
                                                                        </DropdownMenu>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    ) : (
                                                        <p className="text-center">No comments yet. Be the first to comment!</p>
                                                    )}
                                                </div>
                                                <div className="comment-input border-t-[.1px] border-zinc-800 px-4 py-3 bg-gray-100 sticky bottom-0">
                                                    <form onSubmit={(e) => handleCommentSubmit(e, PostDetails._id)} className="flex items-center">
                                                        <input
                                                            type="text"
                                                            placeholder="Add a comment..."
                                                            value={comment}
                                                            onChange={(e) => setComment(e.target.value)}
                                                            className="flex-1 bg-transparent outline-none text-sm"
                                                            aria-label="Add a comment"
                                                        />
                                                        <Button
                                                            type="submit"
                                                            variant="ghost"
                                                            className={`text-blue-500 font-bold text-sm ${!comment.trim() && 'text-zinc-600'}`}
                                                            disabled={!comment.trim()}
                                                        >
                                                            Post
                                                        </Button>
                                                    </form>
                                                </div>
                                            </DrawerContent>
                                        </Drawer>


                                        {/* Share Button */}
                                        <div className="flex flex-col items-center">
                                            <Send className="w-6 h-6 transition-transform hover:scale-110" />
                                            <p className="text-sm">0</p>
                                        </div>

                                        {/* Save Button */}
                                        <div className="flex flex-col items-center">
                                            <button
                                                onClick={(e) => handleSavePosts(e, post._id)}
                                                className="transition-transform hover:scale-110"
                                            >
                                                {Array.isArray(savedPost) && savedPost.includes(post._id) ? (
                                                    <GoBookmarkFill className="w-6 h-6 text-white" />
                                                ) : (
                                                    <GoBookmark className="w-6 h-6" />
                                                )}
                                            </button>
                                        </div>

                                        {/* Options Button */}
                                        <div className="flex flex-col items-center">
                                            <BsThreeDots className="w-6 h-6 transition-transform hover:scale-110" />
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Carousel Navigation Arrows */}
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