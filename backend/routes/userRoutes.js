const express = require('express');
const { getUserAndPosts, getFollowing, following, updateProfile, addToReelHistory, getUserDashboard } = require('../controllers/userController');
const upload = require('../middlewares/uploadMiddleware');
// const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/:username', getUserAndPosts);
router.post('/edit/:id', upload.single('media'), updateProfile);
router.get('/:id/following', getFollowing);
router.get('/dashboard/:username' , getUserDashboard);
router.put('/:id/following', following);
router.post('/reelHistory/:userId/:postId', addToReelHistory);

module.exports = router;
