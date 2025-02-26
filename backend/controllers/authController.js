// controllers/googleAuthController.js

const axios = require('axios');
const jwt = require('jsonwebtoken');
const User = require('../models/userSchema'); // Adjust the path if necessary
const { oauth2client } = require('../config/googleConfig'); // This file should be your google config (see below)

const googleLogin = async (req, res) => {
  try {
    // Extract the authorization code from the query parameters.
    const { code } = req.query;
    console.log(code)
    // Exchange the code for tokens
    const googleRes = await oauth2client.getToken(code);
    oauth2client.setCredentials(googleRes.tokens);
    
    // Fetch the user profile from Google.
    const userInfoResponse = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`
    );
    
    // Destructure data from the Google response.
    // You might get additional fields depending on your scopes.
    const { email, name, picture, id: googleId } = userInfoResponse.data;
    
    // Check if the user already exists.
    let user = await User.findOne({ email });
    
    // If the user doesn't exist, create a new user.
    if (!user) {
      user = await User.create({
        fullName: name,         // set fullName as the name from Google
        username: name,         // set username as the name from Google (or you can transform it if needed)
        email,
        profilePicture: picture,
        googleId,               // store googleId (optional)
      });
    }
    
    // Create a JWT for the user (adjust the secret and expiry as needed)
    const token = jwt.sign({ id: user._id, email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    
    // Optionally, you can set the token as a cookie.
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production'
    });
    
    // Send back the token and user details.
    res.status(200).json({
      message: 'Google authentication successful',
      token,
      user
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { googleLogin };


















// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const User = require('../models/userSchema');

// const register = async (req, res) => {
//   try {
//     const { username, email, password, fullName } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ fullName, username, email, password: hashedPassword });
//     await newUser.save();
//     const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.cookie('token', token);
//     res.status(201).json({ message: 'User registered',newUser });
//   } catch (error) {
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ error: 'Invalid email or password' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ error: 'Invalid email or password' });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.cookie('token', token);
//     res.json({ token, user });
//   } catch (error) {
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// const isLoggedIn = async (req, res) => {
//   if (req.cookies.token) {
//     res.status(200).json({ loggedIn: true });
//   } else {
//     res.status(401).json({ loggedIn: false });
//   }
// };

// const logout = async (req, res) => {
//   res.cookie('token', '', {
//     httpOnly: true,
//     expires: new Date(0),
//     secure: process.env.NODE_ENV === 'production',
//     sameSite: 'strict'
//   });
//   res.status(200).json({ message: 'Logged out successfully' });
// };

// module.exports = { register, login, isLoggedIn, logout };
