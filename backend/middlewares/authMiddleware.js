// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/userSchema');

const COOKIE_NAME = 'token'; 

const authMiddleware = async (req, res, next) => {
  try {
    const token =
      req.cookies?.[COOKIE_NAME] ||
      (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')
        ? req.headers.authorization.split(' ')[1]
        : null);

    console.log(token);

    if (!token) {
      return res.status(401).json({ error: 'Unauthorized: token missing' });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      res.clearCookie(COOKIE_NAME, { 
          httpOnly: true, 
          secure: process.env.NODE_ENV === 'production', 
          sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Strict',
          path: '/' 
      });
      return res.status(401).json({ error: 'Unauthorized: invalid token' });
    }

    const user = await User.findById(decoded.id);
    if (!user) {
      res.clearCookie(COOKIE_NAME, { 
          httpOnly: true, 
          secure: process.env.NODE_ENV === 'production', 
          sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Strict', 
          path: '/' 
      });
      return res.status(401).json({ error: 'Unauthorized: user not found' });
    }

    req.user = user;
    next();
  } catch (err) {
    console.error('authMiddleware error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = authMiddleware;











// const jwt = require('jsonwebtoken');

// const authMiddleware = (req, res, next) => {
//   const token = req.cookies.userToken;

//   if (!token) return res.status(401).json({ error: 'Unauthorized' });

//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) return res.status(403).json({ error: 'Forbidden' });
//     req.user = user;
//     next();
//   });
// };

// module.exports = authMiddleware;
