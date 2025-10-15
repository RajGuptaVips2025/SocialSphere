// routes/authRoutes.js
const express = require('express');
const { googleLogin, getCurrentUser, logout  } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/google', googleLogin);
router.get('/me', authMiddleware, getCurrentUser);
router.post('/logout', logout); 

module.exports = router;






