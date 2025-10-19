const express = require('express');
const connectDB = require('./config/db');
const passport = require('./config/passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');
const conversationRoutes = require('./routes/conversationRoutes');
const searchRoutes = require('./routes/searchRoutes');
const storyRoutes = require('./routes/storyRoutes');
const errorHandler = require('./middlewares/errorMiddleware');
const cors = require('cors');
const { server, app } = require('./socket/socket');
const path = require('path');
require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

// ✅ Connect to MongoDB
connectDB();

// ✅ CORS setup
// const allowedOrigins = [
//   process.env.FRONTEND_PROD_URL, // e.g. https://instagram-frontend.onrender.com
//   process.env.FRONTEND_DEV_URL   // e.g. http://localhost:5173
// ];

const allowedOrigins = [
  process.env.FRONTEND_PROD_URL || 'https://instagram-frontend-j39q.onrender.com',
  process.env.FRONTEND_DEV_URL  || 'http://localhost:5173'
].filter(Boolean);

// app.use(cors({
//   origin: function (origin, callback) {
//     if (!origin) return callback(null, true); // Allow Postman / local scripts
//     if (allowedOrigins.includes(origin)) {
//       return callback(null, true);
//     } else {
//       return callback(new Error('Not allowed by CORS'));
//     }
//   },
//   credentials: true, // ✅ Allow cookies and auth headers
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
// }));

const allowedSet = new Set(allowedOrigins);

const corsOptions = {
  origin: function (origin, callback) {
    // allow requests from tools (curl/postman) or server-to-server (no origin)
    if (!origin) return callback(null, true);

    // Accept explicit allowed origins OR allow any onrender.com subdomain if you prefer
    const isAllowed = allowedSet.has(origin) || origin.endsWith('.onrender.com');
    if (isAllowed) {
      return callback(null, true);
    }

    console.warn(`CORS blocked attempt from origin: ${origin}`);
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true, // allow cookies & auth headers
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
  optionsSuccessStatus: 204
};

// apply CORS
app.use(cors(corsOptions));

// ensure preflight requests are handled for all routes
app.options('*', cors(corsOptions));

// ✅ Middlewares
app.use(express.json());
app.use(cookieParser());

// ✅ Session setup (used only if passport sessions are active)
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: isProduction, // true only on HTTPS
      sameSite: isProduction ? 'None' : 'Lax',
    },
  })
);

// ✅ Passport
app.use(passport.initialize());
app.use(passport.session());

// ✅ Serve static uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ✅ Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);
app.use('/api/conversations', conversationRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/story', storyRoutes);

// ✅ Error handler
app.use(errorHandler);

// ✅ Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));





















// const express = require('express');
// const connectDB = require('./config/db');
// const passport = require('./config/passport');
// const session = require('express-session');
// const cookieParser = require('cookie-parser');
// const authRoutes = require('./routes/authRoutes');
// const postRoutes = require('./routes/postRoutes');
// const userRoutes = require('./routes/userRoutes'); 
// const conversationRoutes = require('./routes/conversationRoutes');
// const searchRoutes = require('./routes/searchRoutes');
// const storyRoutes = require('./routes/storyRoutes');
// const errorHandler = require('./middlewares/errorMiddleware');
// const cors = require('cors');
// const { server, app } = require('./socket/socket');
// const path = require('path');
// require('dotenv').config();

// const isProduction = process.env.NODE_ENV === 'production';

// connectDB();

// const frontendURL = isProduction ? process.env.FRONTEND_PROD_URL : process.env.FRONTEND_DEV_URL;
// console.log(frontendURL)

// app.use(cors({
//   origin: function (origin, callback) {
//     if (!origin) return callback(null, true);
//     const allowedOrigins = [
//       process.env.FRONTEND_PROD_URL, // e.g., https://instagram-frontend-j39q.onrender.com
//       process.env.FRONTEND_DEV_URL   // e.g., http://localhost:5173
//     ];
//     if (allowedOrigins.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
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
// app.use('/api/users', userRoutes); 
// app.use('/api/conversations', conversationRoutes);
// app.use('/api/search', searchRoutes);
// app.use('/api/story', storyRoutes);

// // Error handler
// app.use(errorHandler);

// const PORT = process.env.PORT || 5000;

// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));