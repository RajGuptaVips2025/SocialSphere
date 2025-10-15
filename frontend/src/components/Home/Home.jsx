/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSavedPosts, setFollowing, setFollower, setSelectedPost, setRtmNotification } from '@/features/userDetail/userDetailsSlice'; // Adjust paths as necessary
import PostComment from './PostComment';
import Post from './Post';
import Stories from './Stories';
import { InstagramSkeletonComponent } from './instagram-skeleton';
import { useNavigate } from 'react-router-dom';
import api from '@/api/api';

const Home = ({ socketRef }) => {
  const [allPosts, setAllPosts] = useState([]);
  const [followingUserss, setFollowingUserss] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [selectedMedia, setSelectedMedia] = useState(null); // To track selected media
  const [isDialogOpen, setIsDialogOpen] = useState(false);  // To handle dialog state


  const savedPosts = useSelector((state) => state.counter.savedPosts);
  const userDetails = useSelector((state) => state.counter.userDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchPosts = async (page) => {
    setIsLoading(true);
    try {
      const { data: posts } = await api.get(`/posts/getPosts?page=${page}&limit=10`);
      if (posts.length > 0) {
        setAllPosts((prevPosts) => [...prevPosts, ...posts]);
      } else {
        setHasMore(false); // No more data to load
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
      if (error.response?.statusText === "Unauthorized" || error.response?.status === 403) navigate('/login');
    } finally {
      setIsLoading(false);
    }
  };

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) return;
    setPage((prevPage) => prevPage + 1);
  };

  const handleLike = async (e, postId) => {
    e.preventDefault();
    const userId = userDetails.id;

    try {
      // API request to like the post
      const { data: updatedPost } = await api.put(`/posts/${postId}/like`, { userId });
      // Update the post locally in the state
      setAllPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === postId ? updatedPost.post : post
        )
      );
    } catch (error) {
      console.error('Error liking the post:', error);
      if (error.response?.statusText === "Unauthorized" || error.response?.status === 403) navigate('/login');
    }
  };

  const handleDeletePost = async (e, postId) => {
    e.preventDefault()
    const response = await api.delete(`/posts/delete/${postId}`);
    setAllPosts((prevPosts) => prevPosts.filter((post) => post?._id !== response?.data?.post?._id))
  }

  const handleSavePosts = async (e, postId) => {
    e.preventDefault();
    const userId = userDetails.id;

    try {
      const { data: { savedPosts } } = await api.put(`/posts/${userId}/save`, { postId });

      dispatch(setSavedPosts(savedPosts));
    } catch (error) {
      console.error('Error saving the post:', error);
      if (error.response?.statusText === "Unauthorized" || error.response?.status === 403) navigate('/login');
    }
  };

  const getSavePosts = async () => {
    const userId = userDetails.id;

    try {
      const { data: { savedPosts } } = await api.get(`/posts/${userId}/save`);
      dispatch(setSavedPosts(savedPosts));
    } catch (error) {
      console.error('Error fetching saved posts:', error);
      if (error.response?.statusText === "Unauthorized" || error.response?.status === 403) navigate('/login');
    }
  };

  const showComments = (e, post) => {
    e.preventDefault();
    setSelectedMedia(post);
    setIsDialogOpen(true);
    dispatch(setSelectedPost(post));
  };

  const getFollowing = async () => {
    try {
      const { data } = await api.get(`/users/${userDetails.id}/following`);
      // console.log(data)
      const following = data?.user?.following
      setFollowingUserss(data?.user?.following)
      dispatch(setFollowing([...following]));
    } catch (error) {
      console.error('Error fetching following users:', error);
    }
  };

  const handleFollowing = async (e, followingID) => {
    e.preventDefault();
    const userId = userDetails.id;

    try {
      const { data: { following, followers } } = await api.put(`/users/${userId}/following`, { followingID });
      dispatch(setFollowing(following));
      dispatch(setFollower(followers));
      setFollowingUserss(following);
    } catch (error) {
      console.error('Error following/unfollowing the user:', error.message);
      if (error.response?.statusText === "Unauthorized" || error.response?.status === 403) navigate('/login');
    }
  };

  const handleCommentSubmit = async (e, postId, comment) => {
    e.preventDefault();
    if (!comment.trim()) return;

    try {
      const { data: updatedPost } = await api.post(`/posts/${postId}/comment`, {
        userId: userDetails.id,
        text: comment,
      });
      // console.log(updatedPost.comments)
      setAllPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === postId ? updatedPost : post
        )
      );
      // fetchPosts(); // Refresh posts to show the new comment
    } catch (error) {
      console.error('Error adding comment:', error);
      if (error.response?.statusText === "Unauthorized" || error.response?.status === 403) navigate('/login');
    }
  };


  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  useEffect(() => {
    getFollowing();
    getSavePosts();
  }, []); // Only run once on mount

  useEffect(() => {
    if (socketRef?.current) {
      socketRef.current.on('rtmNotification', (rtmNotification) => {
        if (rtmNotification.id !== userDetails?.id) {
          dispatch(setRtmNotification(rtmNotification));
        }
      });

      return () => {
        socketRef.current.off('rtmNotification');
      };
    }
  }, [socketRef, userDetails, dispatch]);


  return (
    <div className='dark:bg-neutral-950 dark:text-white'>
      <div className="flex bg-white dark:bg-neutral-950 min-h-screen">
        <PostComment selectedMedia={selectedMedia} isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />
        <main className="flex justify-center w-full pt-20 md:pt-16 px-2">
          <div className="w-full max-w-[500px] flex flex-col items-center">
            <Stories />
            <section className="mt-4 w-full flex flex-col items-center">
              {allPosts.map((post) => (
                <Post
                  key={post._id}
                  post={post}
                  userDetails={userDetails}
                  savedPost={savedPosts}
                  followingUserss={followingUserss}
                  handleLike={handleLike}
                  handleSavePosts={handleSavePosts}
                  showComments={showComments}
                  handleFollowing={handleFollowing}
                  handleCommentSubmit={handleCommentSubmit}
                  handleDeletePost={handleDeletePost}
                />
              ))}

              {isLoading && <InstagramSkeletonComponent />}
              {!hasMore && <div className="text-center mt-4 text-gray-400">No more posts to load</div>}
            </section>
          </div>
        </main>
      </div>
    </div>

  );
};

export default Home;

