const { Server } = require("socket.io");
const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

// Determine the current environment
const isProduction = process.env.NODE_ENV === 'production';

// Define allowed origins from environment variables
const allowedOrigins = [
  process.env.FRONTEND_PROD_URL, // e.g., "https://instagram-frontend-j39q.onrender.com"
  process.env.FRONTEND_DEV_URL   // e.g., "http://localhost:5173"
];
console.log('Allowed origins:', allowedOrigins);

const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    methods: ['GET', 'POST'],
    credentials: true
  }
});

const userSocketMap = {};  // Maps userId to socketId

const getReciverSocketId = (receiverId) => userSocketMap[receiverId];

io.on('connection', (socket) => {
  const userId = socket.handshake.query.userId;
  if (userId) {
    userSocketMap[userId] = socket.id;
  }
  // Emit online users to all clients
  io.emit('getOnlineUsers', Object.keys(userSocketMap));

  // User joins a group chat (groupRoom is like the group's unique ID)
  socket.on('joinGroup', ({ groupId }) => {
    socket.join(groupId);
  });

  // Handle group message sending
  socket.on('sendGroupMessage', ({ groupId, senderId, message }) => {
    io.to(groupId).emit('receiveGroupMessage', { senderId, message, groupId });
  });

  // Handle WebRTC signaling data
  socket.on('videoCallOffer', ({ to, offer }) => {
    const receiverSocketId = getReciverSocketId(to);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit('videoCallOffer', { from: userId, offer });
    }
  });

  socket.on('videoCallAnswer', ({ to, answer }) => {
    const receiverSocketId = getReciverSocketId(to);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit('videoCallAnswer', { from: userId, answer });
    }
  });

  socket.on('iceCandidate', ({ to, candidate }) => {
    const receiverSocketId = getReciverSocketId(to);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit('iceCandidate', { from: userId, candidate });
    }
  });

  socket.on('endCall', ({ to, from }) => {
    const targetSocketId = getReciverSocketId(to);
    if (targetSocketId) {
      io.to(targetSocketId).emit('endCall', { from });
    }
  });

  // Handle user disconnection
  socket.on('disconnect', () => {
    if (userId && userSocketMap[userId] === socket.id) {
      delete userSocketMap[userId];
    }
    io.emit('getOnlineUsers', Object.keys(userSocketMap));
  });
});

module.exports = { app, server, io, getReciverSocketId };

