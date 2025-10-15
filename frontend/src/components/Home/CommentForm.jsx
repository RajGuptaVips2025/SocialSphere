/* eslint-disable react/prop-types */
// CommentForm.js
import { useState } from 'react';
import { motion } from 'framer-motion';

const CommentForm = ({ postId, handleCommentSubmit }) => {
  const [comment, setComment] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    handleCommentSubmit(e, postId, comment);
    setComment(''); // Clear comment after submission
  };

  return (
    <motion.form
      onSubmit={onSubmit}
      className="flex items-center pt-2 px-1 pb-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <motion.input
        type="text"
        placeholder="Add a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="flex-1 bg-transparent outline-none text-sm"
        whileFocus={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
      />
      <motion.button
        type="submit"
        className={`text-blue-500 font-semibold text-sm ${!comment.trim() && 'hidden'}`}
        disabled={!comment.trim()}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        Post
      </motion.button>
    </motion.form>
  );
};

export default CommentForm;
