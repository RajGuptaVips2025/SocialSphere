const { Server } = require("socket.io");
const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

const isProduction = process.env.NODE_ENV === 'production';

const allowedOrigins = [
  process.env.FRONTEND_PROD_URL, 
  process.env.FRONTEND_DEV_URL  
];
console.log('Allowed origins:', allowedOrigins);

const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    methods: ['GET', 'POST'],
    credentials: true
  }
});

const userSocketMap = {};  

const getReciverSocketId = (receiverId) => userSocketMap[receiverId];

io.on('connection', (socket) => {
  const userId = socket.handshake.query.userId;
  if (userId) {
    userSocketMap[userId] = socket.id;
  }
  io.emit('getOnlineUsers', Object.keys(userSocketMap));

  socket.on('joinGroup', ({ groupId }) => {
    socket.join(groupId);
  });

  socket.on('sendGroupMessage', ({ groupId, senderId, message }) => {
    io.to(groupId).emit('receiveGroupMessage', { senderId, message, groupId });
  });

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

  socket.on('disconnect', () => {
    if (userId && userSocketMap[userId] === socket.id) {
      delete userSocketMap[userId];
    }
    io.emit('getOnlineUsers', Object.keys(userSocketMap));
  });
});

module.exports = { app, server, io, getReciverSocketId };

