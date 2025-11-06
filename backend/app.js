// ✅ Imports
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

// ✅ Mongo store
const MongoStore = require('connect-mongo');

// ✅ Production check
const isProduction = process.env.NODE_ENV === "production";

// ✅ Connect MongoDB
connectDB();

// =========================================================
// ✅ CORS CONFIG — FIXED
// =========================================================
const allowedOrigins = [
  process.env.FRONTEND_PROD_URL,     // ✔ Netlify frontend
  process.env.FRONTEND_DEV_URL       // ✔ Local dev
].filter(Boolean);                    // Remove empty values

console.log("✅ Allowed Origins:", allowedOrigins);

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // allow server-to-server / Postman

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.log("❌ CORS BLOCKED:", origin);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,   // allow cookies & auth headers
  })
);

// ✅ Handle preflight
app.options("*", cors());

// =========================================================
// ✅ Body & Cookies
// =========================================================
app.use(express.json());
app.use(cookieParser());

// =========================================================
// ✅ Session Setup
// =========================================================
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
      touchAfter: 24 * 3600,       // optional
    }),
    cookie: {
      secure: isProduction,        // ✔ HTTPS only in production
      sameSite: isProduction ? "None" : "Lax",
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000, // ✔ 30 days
    }
  })
);

// =========================================================
// ✅ Passport
// =========================================================
app.use(passport.initialize());
app.use(passport.session());

// =========================================================
// ✅ Static uploads
// =========================================================
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// =========================================================
// ✅ Routes
// =========================================================
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);
app.use('/api/conversations', conversationRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/story', storyRoutes);

// =========================================================
// ✅ Global Error Handler
// =========================================================
app.use(errorHandler);

// =========================================================
// ✅ Start server
// =========================================================
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});










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

// // --- ADD THIS LINE ---
// const MongoStore = require('connect-mongo');

// const isProduction = process.env.NODE_ENV === 'production';

// // ✅ Connect to MongoDB
// connectDB();

// // ✅ CORS setup
// const allowedOrigins = [
//   process.env.FRONTEND_PROD_URL || 'https://socialsphereweb.netlify.app',
//   process.env.FRONTEND_DEV_URL  || 'http://localhost:5173'
// ].filter(Boolean);

// console.log('Allowed origins:', allowedOrigins); // Good for debugging

// const allowedSet = new Set(allowedOrigins);

// const corsOptions = {
//   origin: function (origin, callback) {
//     // allow requests from tools (curl/postman) or server-to-server (no origin)
//     if (!origin) return callback(null, true);

//     // Accept explicit allowed origins OR allow any onrender.com subdomain if you prefer
//     const isAllowed = allowedSet.has(origin) || origin.endsWith('.onrender.com');
//     if (isAllowed) {
//       return callback(null, true);
//     }

//     console.warn(`CORS blocked attempt from origin: ${origin}`);
//     return callback(new Error('Not allowed by CORS'));
//   },
//   credentials: true, // allow cookies & auth headers
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
//   optionsSuccessStatus: 204
// };

// // apply CORS
// app.use(cors(corsOptions));

// // ensure preflight requests are handled for all routes
// app.options('*', cors(corsOptions));

// // ✅ Middlewares
// app.use(express.json());
// app.use(cookieParser());

// // --- THIS SECTION IS UPDATED ---
// // ✅ Session setup
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     // ✅ Add this store configuration
//     store: MongoStore.create({
//       mongoUrl: process.env.MONGO_URI, // Your MongoDB connection string
//       touchAfter: 24 * 3600, // Optional: only update session once per 24h
//       autoRemove: 'interval',
//       autoRemoveInterval: 10 // In minutes. Default
//     }),
//     cookie: {
//       secure: isProduction, // true only on HTTPS
//       sameSite: isProduction ? 'None' : 'Lax',
//       maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
//     },
//   })
// );
// // --- END OF UPDATED SECTION ---

// // ✅ Passport
// app.use(passport.initialize());
// app.use(passport.session());

// // ✅ Serve static uploads
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // ✅ Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/posts', postRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/conversations', conversationRoutes);
// app.use('/api/search', searchRoutes);
// app.use('/api/story', storyRoutes);

// // ✅ Error handler
// app.use(errorHandler);

// // ✅ Start server
// const PORT = process.DOCKER_PORT || process.env.PORT || 5000;
// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


