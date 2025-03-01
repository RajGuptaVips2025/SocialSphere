const express = require('express');
const connectDB = require('./config/db');
const passport = require('./config/passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes'); // Updated userRoutes with reel history functionality
const conversationRoutes = require('./routes/conversationRoutes');
const searchRoutes = require('./routes/searchRoutes');
const storyRoutes = require('./routes/storyRoutes');
const errorHandler = require('./middlewares/errorMiddleware');
const cors = require('cors');
const { server, app } = require('./socket/socket');
const path = require('path');
require('dotenv').config();

// Determine the current environment
const isProduction = process.env.NODE_ENV === 'production';

// Connect to database (assuming connectDB() handles process.env internally)
connectDB();

// Set the frontend URL dynamically for CORS
const frontendURL = isProduction ? process.env.FRONTEND_PROD_URL : process.env.FRONTEND_DEV_URL;
// console.log(frontendURL)

app.use(cors({
  origin: frontendURL, // Uses dynamic URL for CORS
  methods: ['GET', 'POST', 'PUT'],
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes); // Now includes reel history functionality
app.use('/api/conversations', conversationRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/story', storyRoutes);

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


























// const express = require('express');
// const connectDB = require('./config/db');
// const passport = require('./config/passport');
// const session = require('express-session');
// const cookieParser = require('cookie-parser');
// const authRoutes = require('./routes/authRoutes');
// const postRoutes = require('./routes/postRoutes');
// const userRoutes = require('./routes/userRoutes'); // Updated userRoutes with reel history functionality
// const conversationRoutes = require('./routes/conversationRoutes');
// const searchRoutes = require('./routes/searchRoutes');
// const storyRoutes = require('./routes/storyRoutes');
// const errorHandler = require('./middlewares/errorMiddleware');
// const cors = require('cors');
// const { server, app } = require('./socket/socket');
// const path = require('path');
// require('dotenv').config();

// // Connect to database
// connectDB();

// app.use(cors({
//   origin: process.env.NODE_ENV === 'production'
//     ? process.env.FRONTEND_PROD_URL
//     : process.env.FRONTEND_DEV_URL,
//   methods: ['GET', 'POST', 'PUT'],
//   credentials: true
// }));

// app.use(express.json());
// app.use(cookieParser());
// app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/posts', postRoutes);
// app.use('/api/users', userRoutes); // Now includes reel history functionality
// app.use('/api/conversations', conversationRoutes);
// app.use('/api/search', searchRoutes);
// app.use('/api/story', storyRoutes);

// // Error handler
// app.use(errorHandler);

// const PORT = process.env.PORT || 5000;

// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
