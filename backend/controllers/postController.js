const sizeOf = require('image-size');
const Post = require('../models/postSchema');
const User = require('../models/userSchema');
const cloudinary = require('../config/cloudinary'); // Import Cloudinary
const fs = require('fs'); // To delete files after upload
const { getReciverSocketId, io } = require('../socket/socket');
const Datauri = require('datauri/parser'); // <--- Correct import for the parser class
const parser = new Datauri(); // <--- Initialize the parser
const path = require('path');

// Helper function to create the Data URI from the file buffer
const dataUriFromBuffer = (file) => {
  // path.extname gets the file extension (e.g., .jpg)
  return parser.format(path.extname(file.originalname).toString(), file.buffer);
};

// const createPost = async (req, res) => {
//   try {
//     const { caption, author } = req.body;

//     if (!req.files || req.files.length === 0) {
//       return res.status(400).json({ error: 'No files uploaded' });
//     }

//     const mediaDetails = [];

//     // Loop through each uploaded file and upload to Cloudinary
//     for (let file of req.files) {
//       let result;
//       try {
//         result = await cloudinary.uploader.upload(file.path, {
//           folder: 'posts',
//           resource_type: 'auto',
//         });
//       } catch (error) {
//         console.error('Cloudinary upload failed:', error.message);
//         return res.status(500).json({ error: 'Failed to upload to Cloudinary' });
//       }

//       mediaDetails.push({
//         mediaType: file.mimetype.startsWith('image') ? 'image' : 'video',
//         mediaPath: result.secure_url,
//         imageWidth: result.width,
//         imageHeight: result.height,
//       });

//       fs.unlinkSync(file.path);
//     }

//     const newPost = new Post({
//       caption,
//       media: mediaDetails, // Save multiple media objects
//       author,
//     });

//     const user = await User.findById(author);
//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     user.posts.push(newPost._id);
//     await user.save();
//     await newPost.save();

//     res.status(201).json({ newPost });
//   } catch (error) {
//     console.error('Error creating post:', error.message);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };


const createPost = async (req, res) => {
  try {
    // Since Multer is using memoryStorage, the file properties change slightly.
    // The file buffer is now available at file.buffer, not file.path.
    const { caption, author } = req.body;

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'No files uploaded' });
    }

    const mediaDetails = [];

    // Loop through each uploaded file and upload to Cloudinary
    for (let file of req.files) {

      // 1. Generate the Data URI from the in-memory file buffer
      const dataUri = dataUriFromBuffer(file);

      let result;
      try {
        // 2. Upload the Data URI string using its .content property
        // This bypasses the need to read a file from the ephemeral disk
        result = await cloudinary.uploader.upload(dataUri.content, {
          folder: 'posts',
          resource_type: 'auto', // Important for handling both images and videos
        });
      } catch (error) {
        // If Cloudinary fails, log the error and return 500
        console.error('Cloudinary upload failed:', error.message);
        return res.status(500).json({ error: 'Failed to upload to Cloudinary' });
      }

      // 3. Collect media details from the successful Cloudinary response
      mediaDetails.push({
        // Cloudinary result.resource_type is more reliable than file.mimetype
        mediaType: result.resource_type,
        mediaPath: result.secure_url,
        imageWidth: result.width,
        imageHeight: result.height,
      });

      // REMOVED: fs.unlinkSync(file.path); 
      // The file was never written to the disk, so no need to delete it.
    }

    // Create new Post object
    const newPost = new Post({
      caption,
      media: mediaDetails, // Save multiple media objects
      author,
    });

    // Find and update the user's posts array
    const user = await User.findById(author);
    if (!user) {
      // Note: Cloudinary uploads are permanent unless deleted. 
      // In a real application, you might want to clean up the uploads if user is not found.
      return res.status(404).json({ error: 'User not found' });
    }

    user.posts.push(newPost._id);
    await user.save();
    await newPost.save();

    res.status(201).json({ newPost });
  } catch (error) {
    console.error('Error creating post:', error.message);
    // The final catch block handles any error that wasn't explicitly caught above
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const getAllPosts = async (req, res) => {
  const page = parseInt(req.query.page) || 0;
  const limit = parseInt(req.query.limit) || 10;

  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 })  // ✅ Sort by latest posts
      .skip(page * limit)
      .limit(limit)
      .populate('author', 'username profilePicture')
      .populate('comments.user', 'username')
      .lean(); // ✅ Faster response by returning plain JS objects

    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};


const like = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate('author', 'username profilePicture');
    const user = await User.findById(post.author);
    const likedUser = await User.findById(req.body.userId);
    let newObj = {};
    if (!post.likes.includes(req.body.userId)) {
      post.likes.push(req.body.userId);
      newObj = {
        likeType: 'like',
        id: likedUser._id,
        username: likedUser.username,
        userPic: user.profilePicture
      };
    } else {
      post.likes.pull(req.body.userId);
      newObj = {
        likeType: 'dislike',
        id: likedUser._id,
        username: user.username,
        userPic: user.profilePicture
      };
    }

    await post.save();

    console.log(post?.author?._id)

    const receiverSocketId = getReciverSocketId(post?.author?._id);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit('rtmNotification', newObj);
    } else {
      console.log('Receiver not connected to socket');
    }
    res.json({ post, newObj });
  } catch (error) {
    console.error('Error in like route:', error);
    res.status(500).json({ error: 'Server error' });
  }
};


const getComment = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate('author', 'username profilePicture')
      .populate('comments.user', 'username profilePicture'); // Include profilePicture

    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};


const savePost = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user.savedPosts.includes(req.body.postId)) {
      user.savedPosts.push(req.body.postId);
    } else {
      user.savedPosts.pull(req.body.postId);
    }
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};


const getSavedPosts = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};


const writeComment = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const user = await User.findById(req.body.userId);
    post.comments.push({ user: req.body.userId, text: req.body.text, profilePicture: user.profilePicture });
    await post.save();
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};


const removeComment = async (req, res) => {
  const { postId, commentId } = req.params;

  try {
    const post = await Post.findByIdAndUpdate(
      postId,
      { $pull: { comments: { _id: commentId } } }, // Assuming _id is the field for each comment
      { new: true } // To return the updated post
    ).populate('author', 'username profilePicture')
      .populate('comments.user', 'username profilePicture');;

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    return res.status(200).json({ message: 'Comment removed successfully', post });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

const deletePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const userId = req.user.id; // Assuming user ID is available in req.user (after authentication middleware)

    // Find the post by ID
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Authorization: Check if the logged-in user is the author of the post
    if (post.author.toString() !== userId.toString()) {
      return res.status(403).json({ message: 'You are not authorized to delete this post' });
    }

    // Remove post from the database
    await Post.findByIdAndDelete(postId);

    // Remove post from user's posts array (if needed)
    await User.findByIdAndUpdate(userId, { $pull: { posts: postId } });

    res.status(200).json({ message: 'Post deleted successfully', post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};


// Define other controller methods here...

module.exports = { createPost, getAllPosts, like, getComment, savePost, getSavedPosts, writeComment, removeComment, deletePost };
