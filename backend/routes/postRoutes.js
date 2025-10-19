const express = require('express');
const { createPost, getAllPosts, like, savePost, getComment, writeComment, getSavedPosts, removeComment, deletePost } = require('../controllers/postController');
const upload = require('../middlewares/uploadMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/create', upload.array('media', 10), createPost); // Handle up to 10 files
router.get('/getPosts',  getAllPosts);
router.put('/:id/like',  like);
router.get('/:id/comment',  getComment);
router.put('/:id/save',  savePost);
router.get('/:id/save',  getSavedPosts);
router.post('/:id/comment',  writeComment);
router.delete('/:postId/comment/:commentId',  removeComment);
router.delete('/delete/:postId',authMiddleware,  deletePost);

module.exports = router;
