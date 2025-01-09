import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import SuggestedUsers from './SuggestedUsers';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setSavedPosts, setFollowing, setFollower, setSelectedPost, setRtmNotification } from '@/features/userDetail/userDetailsSlice'; // Adjust paths as necessary
import PostComment from './PostComment';
import Post from './Post';
import Stories from './Stories';
import { InstagramSkeletonComponent } from './instagram-skeleton';
import { useNavigate } from 'react-router-dom';

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
      const { data: posts } = await axios.get(`/api/posts/getPosts?page=${page}&limit=10`);
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
      const { data: updatedPost } = await axios.put(`/api/posts/${postId}/like`, { userId });
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
    const response = await axios.delete(`/api/posts/delete/${postId}`);
    setAllPosts((prevPosts) => prevPosts.filter((post) => post?._id !== response?.data?.post?._id))
  }

  const handleSavePosts = async (e, postId) => {
    e.preventDefault();
    const userId = userDetails.id;

    try {
      const { data: { savedPosts } } = await axios.put(`/api/posts/${userId}/save`, { postId });

      dispatch(setSavedPosts(savedPosts));
    } catch (error) {
      console.error('Error saving the post:', error);
      if (error.response?.statusText === "Unauthorized" || error.response?.status === 403) navigate('/login');
    }
  };

  const getSavePosts = async () => {
    const userId = userDetails.id;

    try {
      const { data: { savedPosts } } = await axios.get(`/api/posts/${userId}/save`);
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
      const { data } = await axios.get(`/api/users/${userDetails.id}/following`);
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
      const { data: { following, followers } } = await axios.put(`/api/users/${userId}/following`, { followingID });
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
      const { data: updatedPost } = await axios.post(`/api/posts/${postId}/comment`, {
        userId: userDetails.id,
        text: comment,
      });
      console.log(updatedPost.comments)
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
    socketRef.current.on('rtmNotification', (rtmNotification) => {
      {
        rtmNotification.id !== userDetails?.id &&
        dispatch(setRtmNotification(rtmNotification))
      }
    });
    return () => {
      socketRef.current.off('rtmNotification');
    };
  }, []); // Empty dependency array to ensure the listener is added only once

  return (<div className='dark:bg-neutral-950 dark:text-white'>
    <div className="flex bg-white dark:bg-neutral-950 min-h-screen">
      {/* <Sidebar /> */}
      <PostComment selectedMedia={selectedMedia} isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />
      {/* <main className="flex-1 ml-64 flex justify-center"> */}
      <main className="flex-1 md:ml-[72px] lg:ml-60">
        {/* <div className="max-w-2xl w-full py-3 px-4"> */}
        <div className="max-w-screen-xl mt-14 md:mt-0 mx-auto py-2 md:px-6 lg:px-8">
          <div className="flex gap-0">
            <div className="flex-1 max-w-[630px]">
              <Stories />
              {/* Posts */}
              <section className="mt-2 mx-auto sm:w-[80vw] md:w-[60vw] lg:w-[468px]">
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
                {!hasMore && <div>No more posts to load</div>}
              </section>
            </div>
            <SuggestedUsers />
          </div>
        </div>
      </main>
    </div>
  </div>

  );
};

export default Home;