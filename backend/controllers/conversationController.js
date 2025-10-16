const Conversation = require('../models/conversationSchema');
const Message = require('../models/messageSchema');
const User = require('../models/userSchema');
const GroupChat = require('../models/groupChatSchema')
const cloudinary = require('../config/cloudinary')
const { getReciverSocketId, io } = require('../socket/socket');

const sendMessage = async (req, res) => {
  try {
    const { textMessage: message, senderId, messageType } = req.body;
    const receiverId = req.params.id;

    let mediaUrl = '';
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        resource_type: "auto", 
      });
      mediaUrl = result.secure_url;
    }

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] }
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = await Message.create({
      senderId,
      reciverId: receiverId,
      message: messageType === 'text' ? message : undefined,
      mediaUrl: messageType !== 'text' ? mediaUrl : undefined,
      messageType,
    });
    console.log(newMessage);
    conversation.messages.push(newMessage._id);
    conversation.lastMessage = {
      messageId: newMessage._id,
      text: messageType === 'text' ? message : `[${messageType}]`,
      senderId,
      createdAt: newMessage.createdAt,
    };
    conversation.updatedAt = new Date();
    await conversation.save();

    // Populate the new message with sender and receiver details
    const popMessage = await Message.findById(newMessage._id)
      .populate('senderId', 'username profilePicture') // Populate sender details
      .populate('reciverId', 'username profilePicture'); // Populate receiver details
    const populatedMessage = popMessage.toObject();
    populatedMessage.lastMessage = {
      text: newMessage.message,
      createdAt: newMessage.timestamp // use createdAt instead of timestamp
    };
    // console.log("populatedMessage  ", populatedMessage)
    const receiverSocketId = getReciverSocketId(receiverId);
    const senderSocketId = getReciverSocketId(senderId)
    if (receiverSocketId) {
      io.to(receiverSocketId).emit('newMessage', populatedMessage);
    }

    if (senderSocketId) {
      io.to(senderSocketId).emit('senderMessage', populatedMessage);
    }

    res.status(200).json({ success: true, newMessage: populatedMessage });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: 'Server error' });
  }
};


// For getting friends of a user
const getFriends = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username })
      .populate({
        path: 'following',
        select: '-password'
      });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user.following);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getAllMessages = async (req, res) => {
  try {
    const senderId = req.query.senderId;
    const receiverId = req.params.id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] }
    }).populate({
      path: 'messages',
      populate: [
        { path: 'senderId', select: 'username profilePicture' }, // Populate sender details
        { path: 'reciverId', select: 'username profilePicture' }  // Populate receiver details (if necessary)
      ]
    });


    if (!conversation) {
      return res.status(201).json({ success: true, messages: [] });
    }

    return res.status(200).json({ success: true, messages: conversation.messages });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

const createGroupChat = async (req, res) => {
  try {
    const { groupName, members, groupImage, createdBy } = req.body;

    // Add the admin to members
    const allMembers = [...members, { userId: createdBy, role: 'admin' }];

    // Create the group chat
    const newGroupChat = await GroupChat.create({
      groupName,
      groupImage,
      members: allMembers,
      createdBy
    });

    // Create a conversation document for the group
    const newConversation = await Conversation.create({
      participants: allMembers.map(m => m.userId),
      group: newGroupChat._id,
      messages: [],
      lastMessage: null
    });

    // Emit socket to all members
    allMembers.forEach(({ userId }) => {
      const socketId = getReciverSocketId(userId);
      if (socketId) {
        io.to(socketId).emit('groupCreated', {
          message: `You have been added to the group ${groupName}`,
          groupChat: newGroupChat
        });
      }
    });

    res.status(201).json({
      success: true,
      groupChat: newGroupChat,
      conversation: newConversation
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

const getUserGroups = async (req, res) => {
  try {
    const { userId } = req.params;

    const groups = await GroupChat.find({
      $or: [
        { "members.userId": userId }, // User is a member
        { createdBy: userId }         // User is the creator/admin
      ]
    }).populate({
      path: 'members.userId',
      select: 'fullName username profilePicture' // Include fullName and username, exclude password
    }); // Exclude password field

    if (!groups) return res.status(401).json({ message: "not in any group" });

    res.status(200).json(groups);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

// controllers/conversationController.js (inside your module exports)

const sendGroupMessage = async (req, res) => {
  try {
    const { senderId, textMessage: message, messageType } = req.body;
    const groupId = req.params.groupId;

    let mediaUrl = '';
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, { resource_type: "auto" });
      mediaUrl = result.secure_url;
    }

    const groupChat = await GroupChat.findById(groupId).populate({
      path: 'members.userId',
      select: 'username profilePicture', // Include necessary fields for socket/FE update
    });
    
    if (!groupChat) {
      return res.status(404).json({ error: 'Group chat not found' });
    }

    const newMessage = await Message.create({
      senderId,
      groupId,
      message: messageType === 'text' ? message : undefined,
      mediaUrl: messageType !== 'text' ? mediaUrl : undefined,
      messageType
    });

    const conversation = await Conversation.findOne({ group: groupId });
    if (!conversation) return res.status(404).json({ error: "Conversation not found" });

    conversation.messages.push(newMessage._id);
    conversation.lastMessage = {
      messageId: newMessage._id,
      text: messageType === 'text' ? message : `[${messageType}]`,
      senderId,
      createdAt: newMessage.timestamp // Use newMessage.timestamp or createdAt
    };
    conversation.updatedAt = new Date();
    await conversation.save();

    groupChat.messages.push({
      senderId,
      message: messageType === 'text' ? message : undefined,
      mediaUrl: messageType !== 'text' ? mediaUrl : undefined,
      messageType,
      timestamp: newMessage.timestamp
    });
    groupChat.updatedAt = new Date();
    await groupChat.save();

    const popMessage = await Message.findById(newMessage._id).populate('senderId', 'username profilePicture');
    const newMsg = popMessage.toObject();
    
    newMsg.groupName = groupChat.groupName;
    newMsg.groupImage = groupChat.groupImage;
    newMsg.groupId = groupId; 
    
    groupChat.members.forEach(m => {
      const memberId = m.userId._id.toString(); 
      const socketId = getReciverSocketId(memberId);
      if (socketId) io.to(socketId).emit('sendGroupMessage', newMsg);
    });
    
    res.status(201).json({ success: true, newMessage: newMsg });
    
  } catch (error) {
    console.error("Error in sendGroupMessage:", error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

const getGroupMessages = async (req, res) => {
  try {
    const groupId = req.params.groupId;

    const groupChat = await GroupChat.findById(groupId).populate('messages.senderId', 'username profilePicture');
    if (!groupChat) {
      return res.status(404).json({ error: 'Group chat not found' });
    }

    res.status(200).json({ success: true, messages: groupChat.messages });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

const addMemberToGroup = async (req, res) => {
  try {
    const { groupId } = req.params;
    const { userId } = req.body;

    // Validate inputs
    if (!groupId || !userId) {
      return res.status(400).json({ error: "Group ID and User ID are required" });
    }

    // Fetch the group chat
    const groupChat = await GroupChat.findById(groupId);
    if (!groupChat) {
      return res.status(404).json({ error: "Group chat not found" });
    }

    // Check if the user is already in the group
    const isMember = groupChat.members.some(
      (member) => member.userId.toString() === userId
    );
    if (isMember) {
      return res.status(400).json({ error: "User is already a member" });
    }

    // Fetch the user and add them to the group
    const groupMember = await User.findById(userId).select("username profilePicture");
    if (!groupMember) {
      return res.status(404).json({ error: "User not found" });
    }

    // Add the user to the group with a default role
    groupChat.members.push({ userId, role: "member" });
    await groupChat.save();

    // Respond with the newly added member's details
    res.status(200).json({
      success: true,
      message: "Member added successfully",
      newUser: {
        _id: groupMember._id,
        username: groupMember.username,
        profilePic: groupMember.profilePicture || "/default-avatar.png",
        role: "member",
      },
    });
  } catch (error) {
    console.error("Error adding member to group:", error.message);
    res.status(500).json({ error: "Server error" });
  }
};



// Remove a member from the group chat
const removeMemberFromGroup = async (req, res) => {
  try {
    const groupId = req.params.groupId;
    const { userId } = req.body;

    const groupChat = await GroupChat.findById(groupId);
    if (!groupChat) {
      return res.status(404).json({ error: 'Group chat not found' });
    }

    groupChat.members = groupChat.members.filter(member => member.userId.toString() !== userId);
    await groupChat.save();

    res.status(200).json({ success: true, message: 'Member removed successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

const renameGroup = async (req, res) => {
  try {
    const groupId = req.params.groupId;
    const { groupName } = req.body;

    // Validate the new group name
    if (!groupName || groupName.trim().length === 0) {
      return res.status(400).json({ message: 'Group name cannot be empty.' });
    }

    // Trim group name to avoid unintended whitespace issues
    const trimmedGroupName = groupName.trim();

    // Update the group name
    const updatedGroup = await GroupChat.findByIdAndUpdate(
      groupId,
      { groupName: trimmedGroupName, updatedAt: Date.now() }, // Update `updatedAt` timestamp
      { new: true, runValidators: true } // Return updated document and run validators
    );

    if (!updatedGroup) {
      return res.status(404).json({ message: 'Group not found or invalid group ID.' });
    }

    res.status(200).json({ message: 'Group name updated successfully.', group: updatedGroup });
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while updating the group name.',
      error: error.message,
    });
  }
};

const getRecentContacts = async (req, res) => {
  try {
    const { userId } = req.params;

    // Find conversations where user is a participant
    const conversations = await Conversation.find({
      participants: userId
    })
      .populate({
        path: 'participants',
        select: 'username fullName profilePicture',
      })
      .populate({
        path: 'group',
        select: 'groupName groupImage members',
        populate: { path: 'members.userId', select: 'username fullName profilePicture' }
      })
      .populate({
        path: 'messages',
        options: { sort: { createdAt: -1 }, limit: 1 }, // latest message
        populate: {
          path: 'senderId',
          select: 'username fullName profilePicture'
        }
      })
      .sort({ updatedAt: -1 }); // sort by last activity

    const result = conversations.map(conv => {
      const latestMessage = conv.lastMessage;

      // Check if it's a group conversation
      if (conv.group) {
        return {
          _id: conv.group._id,
          groupName: conv.group.groupName,
          groupImage: conv.group.groupImage,
          members: conv.group.members.map(m => ({
            _id: m.userId._id,
            username: m.userId.username,
            fullName: m.userId.fullName,
            profilePicture: m.userId.profilePicture,
            role: m.role
          })),
          lastMessage: latestMessage
            ? {
              text: latestMessage.text,
              createdAt: latestMessage.createdAt || conv.updatedAt
            }
            : null,
          time: latestMessage ? latestMessage.createdAt : conv.updatedAt
        };
      } else {
        // 1-on-1 conversation
        const otherUser = conv.participants.find(p => p._id.toString() !== userId);
        return {
          _id: otherUser?._id,
          username: otherUser?.username,
          name: otherUser?.fullName,
          profilePicture: otherUser?.profilePicture,
          lastMessage: latestMessage
            ? {
              text: latestMessage.text,
              createdAt: latestMessage.createdAt || conv.updatedAt
            }
            : null,
          time: latestMessage ? latestMessage.createdAt : conv.updatedAt
        };
      }
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Server error' });
  }
};



module.exports = {
  sendMessage,
  getFriends,
  getAllMessages,
  createGroupChat,
  sendGroupMessage,
  getGroupMessages,
  addMemberToGroup,
  removeMemberFromGroup,
  getUserGroups,
  renameGroup,
  getRecentContacts
};