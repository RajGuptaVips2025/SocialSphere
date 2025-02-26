// routes/authRoutes.js
const express = require('express');
const { googleLogin } = require('../controllers/authController');
// If you still want to support local login/logout, you can import them too.
// const { login, logout, isLoggedIn } = require('../controllers/authController');

const router = express.Router();

// Optionally, if you want to disable local registration, comment out or remove the register route.
// router.post('/register', register);
// router.post('/login', login);

// Add a route for Google authentication.
// The frontend should initiate the OAuth flow and then redirect back with a code.
router.post('/google', googleLogin);

// If you are still using session-based or local authentication, you can keep these.
// router.get('/isLoggedIn', authMiddleware, isLoggedIn);
// router.get('/logout', authMiddleware, logout);

module.exports = router;








// const express = require('express');
// const { register, login, isLoggedIn, logout } = require('../controllers/authController');
// const authMiddleware = require('../middlewares/authMiddleware');
// const router = express.Router();

// // Routes accessible only to guests (no token present)
// router.post('/register',  register);
// router.post('/login', login);
// // Routes accessible only to authenticated users (token required)
// router.get('/isLoggedIn', authMiddleware, isLoggedIn);
// router.get('/logout', authMiddleware, logout);

// module.exports = router;
