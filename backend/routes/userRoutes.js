const express = require('express');
const { getUserAndPosts, getFollowing, following, updateProfile, addToReelHistory, getUserDashboard, checkUsernameAvailability } = require('../controllers/userController');
const upload = require('../middlewares/uploadMiddleware');
const router = express.Router();

router.get('/:username', getUserAndPosts);
router.post('/edit/:id', upload.single('media'), updateProfile);
router.get('/:id/following', getFollowing);
router.get('/dashboard/:username' , getUserDashboard);
router.put('/:id/following', following);
router.post('/reelHistory/:userId/:postId', addToReelHistory);
router.get('/check-username', checkUsernameAvailability);

module.exports = router;
