const express = require('express');
const { register, login, isLoggedIn, logout } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

// Routes accessible only to guests (no token present)
router.post('/register',  register);
router.post('/login', login);
// Routes accessible only to authenticated users (token required)
router.get('/isLoggedIn', authMiddleware, isLoggedIn);
router.get('/logout', authMiddleware, logout);

module.exports = router;
