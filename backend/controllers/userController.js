const User = require('../models/userSchema');
const Post = require('../models/postSchema');
const Story = require('../models/storySchema');
const cloudinary = require('../config/cloudinary'); 
const { getReciverSocketId, io } = require('../socket/socket');


const getUserAndPosts = async (req, res) => {
  const page = parseInt(req.query.page) || 0; 
  const limit = parseInt(req.query.limit) || 10; 
  try {
    const { username } = req.params;
    const user = await User.findOne({ username }).select('-password');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const posts = await Post.find({ author: user._id })
      .skip(page * limit).limit(limit)
      .populate('author', 'username profilePicture')
      .populate('comments.user', 'username');

    res.json({ user, posts });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const getFollowing = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
  
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
  
    const followingUsers = [...user.following, user._id];
    const stories = await Story.find({ user: { $in: followingUsers } })
      .populate("user", "username profilePicture") 
      .sort({ createdAt: -1 });
  
    res.json({ user, stories });
  
  } catch (error) {
    console.error("Error fetching user and stories:", error);
    res.status(500).json({ error: 'Server error' });
  }

};

const following = async (req, res) => {
  try {
    console.log(req.params.id);
    const user = await User.findById(req.params.id).select('-password');
    const followingUser = await User.findById(req.body.followingID);
console.log(user)
    if (!user || !followingUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    let newObj = {};
    if (!user.following.includes(req.body.followingID)) {
      user.following.push(req.body.followingID);
      newObj = {
        followType: 'follow',
        id: user._id,
        username: user.username,
        userPic: user.profilePicture,
      };
    } else {
      user.following.pull(req.body.followingID);
      newObj = {
        followType: 'unFollow',
        id: user._id,
        username: user.username,
        userPic: user.profilePicture,
      };
    }

    if (!followingUser.followers.includes(req.params.id)) {
      followingUser.followers.push(req.params.id);
    } else {
      followingUser.followers.pull(req.params.id);
    }

    await Promise.all([user.save(), followingUser.save()]);

    res.json(user);

    const receiverSocketId = getReciverSocketId(followingUser._id);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit('rtmNotification', newObj);
    } else {
      console.log('Receiver not connected to socket');
    }
  } catch (error) {
    console.error('Error in following/unfollowing:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
};





const updateProfile = async (req, res) => {
  try {
    const { id } = req.params; // Get user ID from the request parameters
    const { username, name, bio } = req.body; // Assume these fields are being updated
    let updateData = { username, name, bio };
    let result; 

    if (req.file) {
      // Update the profile image field
      try {
        result = await cloudinary.uploader.upload(req.file.path, {
          folder: 'posts',
          resource_type: 'auto', // Automatically determine resource type (image, video, etc.)
        });
      } catch (error) {
        console.error('Cloudinary upload failed:', error.message);
        return res.status(500).json({ error: 'Failed to upload to Cloudinary' });
      }
      updateData.profilePicture = result.secure_url;
    }

    // Find the user and update the specified fields
    const updatedUser = await User.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true } // Return the updated document and validate the changes
    ).select('-password'); // Exclude the password field from the returned document

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'Profile updated successfully', user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while updating the profile', error: error.message });
  }
};


const addToReelHistory = async (req, res) => {
  try {
    const { userId, postId } = req.params; // Get userId and postId from request params

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.reelHistory.push({
      postId,
      watchedAt: new Date()
    });

    // Save the updated user document
    await user.save();

    res.status(200).json({ message: 'Reel added to history successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


const getUserDashboard = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const reels = await Post.find({ author: user._id });

    const totalLikes = [];
    const totalComments = [];
    const totalViews = [];

    reels.forEach(reel => {
      if (reel.likes.length > 0) {
        totalLikes.push(reel._id); 
      }
      if (reel.comments.length > 0) {
        totalComments.push(reel._id); 
      }
      if (reel.views > 0) {
        totalViews.push(reel._id); 
      }
    });

    const responseData = {
      totalLikes: totalLikes.length, 
      totalComments: totalComments.length, 
      totalViews: totalViews.length, 
      reels
    };

    return res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};


const checkUsernameAvailability = async (req, res) => {
  try {
    const { username } = req.query;
    if (!username) {
      return res.status(400).json({ message: 'Username is required' });
    }

    const user = await User.findOne({ username });

    const isAvailable = !user; 

    res.status(200).json({ isAvailable });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getUserAndPosts, getFollowing, following, updateProfile, addToReelHistory, getUserDashboard, checkUsernameAvailability };
