/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { IoChatbubbleSharp } from "react-icons/io5";
import PostComment from '../Home/PostComment';
import { useDispatch } from 'react-redux';
import { setSelectedPost } from '@/features/userDetail/userDetailsSlice';
import { useNavigate } from 'react-router-dom';
import api from '@/api/api';
import { motion, AnimatePresence } from 'framer-motion';

const ExploreGrid = () => {
  const [allPosts, setAllPosts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const fetchPosts = async () => {
    try {
      const { data: posts } = await api.get('/posts/getPosts');
      setAllPosts(posts.reverse());
    } catch (error) {
      console.error('Error fetching posts:', error);
      if (error.response?.statusText === "Unauthorized" || error.response?.status === 403)
        navigate('/login');
    }
  };

  const showComments = (e, post) => {
    e.preventDefault();
    setSelectedMedia(post);
    setIsDialogOpen(true);
    dispatch(setSelectedPost(post));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderMedia = (post) => (
    <>
      {post?.media[0]?.mediaType === 'image' ? (
        <motion.img
          src={post?.media[0]?.mediaPath}
          alt={post?.caption}
          className="object-cover w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      ) : (
        <motion.video
          autoPlay
          muted
          src={post?.media[0]?.mediaPath}
          loop
          className="object-cover w-full h-full duration-300"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Hover Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-black/20 text-white absolute w-full h-full top-0 hidden group-hover:flex justify-center items-center gap-5"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="likes flex justify-center items-center gap-1"
        >
          <FaHeart size={18} />
          <p>{post?.likes?.length}</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="comments flex justify-center items-center gap-1"
        >
          <IoChatbubbleSharp size={25} style={{ transform: 'scaleX(-1)' }} />
          <p>{post?.comments?.length}</p>
        </motion.div>
      </motion.div>
    </>
  );

  return (
    <>
      <PostComment selectedMedia={selectedMedia} isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />

      <motion.div
        // className="flex-1  dark:bg-neutral-950 min-h-screen grid grid-cols-3 gap-1 md:px-12 py-5 md:py-12 ml-auto"
        className="flex-1 bg-[#0f172a] dark:bg-[#0f172a] min-h-screen grid grid-cols-3 gap-1 md:px-12 py-5 md:py-12 ml-auto pt-20 md:pt-20 lg:pt-20"

        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
      >
        <AnimatePresence>
          {allPosts?.map((post, index) => {
            const postVariants = {
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: index * 0.05 } },
              exit: { opacity: 0, scale: 0.9 },
            };

            if (index === 2) {
              return (
                <motion.div
                  variants={postVariants}
                  key={post?._id}
                  onClick={(e) => showComments(e, post)}
                  className="relative h-full col-span-1 row-span-2 group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {renderMedia(post)}
                </motion.div>
              );
            }

            return (
              <motion.div
                variants={postVariants}
                key={post?._id}
                onClick={(e) => showComments(e, post)}
                className="w-full relative h-80 bg-gray-800 col-span-1 group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {renderMedia(post)}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

const Explore = () => {
  return (
    <>
      <ExploreGrid />
    </>
  );
};

export default Explore;




