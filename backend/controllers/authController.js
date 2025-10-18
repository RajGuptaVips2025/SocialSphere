// controllers/googleAuthController.js

const axios = require('axios');
const jwt = require('jsonwebtoken');
const User = require('../models/userSchema');
const { oauth2client } = require('../config/googleConfig');

const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;

const googleLogin = async (req, res) => {
  try {
    const { code } = req.query;
    console.log(code)
    const googleRes = await oauth2client.getToken(code);
    oauth2client.setCredentials(googleRes.tokens);

    const userInfoResponse = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`
    );

    const { email, name, picture, id: googleId } = userInfoResponse.data;

    let user = await User.findOne({ email });
    let isNewUser = false;

    if (!user) {
      isNewUser = true;
      const baseUsername = name.toLowerCase().replace(/\s/g, '');
      const uniqueIdSuffix = googleId.slice(-6); // Last 6 chars of Google ID
      const placeholderUsername = `${baseUsername}-${uniqueIdSuffix}`;

      user = await User.create({
        fullName: name,
        username: placeholderUsername,
        email,
        profilePicture: picture,
        googleId,
        needsUsername: true,
      });
    }

    const needsUsername = isNewUser || user.username.includes('-');

    const token = jwt.sign(
      { id: user._id, email, needsUsername: user.needsUsername || isNewUser },
      process.env.JWT_SECRET,
      { expiresIn: 60 * 60 * 24 * 30 }
    );

    // res.cookie('token', token, {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === 'production',
    //   sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Strict',
    //   path: '/',
    // });

    console.log('cookieOptions', {
      NODE_ENV: process.env.NODE_ENV,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
      maxAge: 30 * 24 * 60 * 60 * 1000
    });

    // ✅ Set cookie for 30 days
    // res.cookie('token', token, {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === 'production', // true only for HTTPS
    //   sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
    //   path: '/',
    //   maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    // });

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
      path: '/',
      maxAge: THIRTY_DAYS,
      expires: new Date(Date.now() + THIRTY_DAYS),
    });


    res.status(200).json({
      message: 'Google authentication successful',
      token,
      user: { ...user.toObject(), needsUsername: isNewUser || user.needsUsername } // Send the flag to the frontend
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getCurrentUser = (req, res) => {
  const user = req.user;
  if (!user) return res.status(401).json({ error: 'Unauthorized' });

  const safeUser = {
    _id: user._id,
    fullName: user.fullName,
    username: user.username,
    email: user.email,
    profilePicture: user.profilePicture,
  };

  res.status(200).json({ user: safeUser });
};

// const logout = async (req, res) => {
//   try {

//     res.clearCookie('token', {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Strict',
//       path: '/',
//     });

//     res.status(200).json({ message: 'Logout successful' });
//   } catch (err) {
//     console.error('Logout error:', err);
//     res.status(500).json({ error: 'Internal server error during logout' });
//   }
// };

const logout = async (req, res) => {
  try {
    res.clearCookie('token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
      path: '/',
    });

    res.status(200).json({ message: 'Logout successful' });
  } catch (err) {
    console.error('Logout error:', err);
    res.status(500).json({ error: 'Internal server error during logout' });
  }
};

module.exports = { googleLogin, getCurrentUser, logout };