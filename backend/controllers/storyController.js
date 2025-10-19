// controllers/storyController.js

const Story = require("../models/storySchema");
const cloudinary = require('../config/cloudinary');
const path = require('path');
const Datauri = require('datauri/parser'); 
const parser = new Datauri();

// Helper function to create the Data URI from the file buffer
const dataUriFromBuffer = (file) => {
    // path.extname gets the file extension (e.g., .jpg, .mp4)
    return parser.format(path.extname(file.originalname).toString(), file.buffer);
};

const storyUpload = async (req, res) => {
    let results = [];
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ error: 'No files uploaded' });
        }

        // Upload each file to Cloudinary using in-memory buffer
        for (const file of req.files) {
            
            // 1. Generate the Data URI from the in-memory file buffer
            const dataUri = dataUriFromBuffer(file);
            
            const result = await cloudinary.uploader.upload(dataUri.content, {
                folder: 'stories', // Changed folder name for better organization
                resource_type: 'auto', // Auto-detect image/video
            });
            
            results.push({
                url: result.secure_url,
                type: result.resource_type, // Using Cloudinary's detected resource type
            });
            
            // NOTE: No need for fs.unlinkSync() since Multer is using memoryStorage.
        }

        // Get userId from the request body (as per your original code logic)
        const userId = req.body.userId;     

        if (!userId) {
            return res.status(400).json({ error: 'User ID is missing' });
        }

        // Check if the user already has a story document
        let existingStory = await Story.findOne({ user: userId });

        if (existingStory) {
            // Append new media to the existing story
            existingStory.media.push(...results);
            // Update the updatedAt timestamp to reflect new story content
            existingStory.updatedAt = Date.now(); 
            await existingStory.save();
            res.status(200).json({ message: "Stories added", story: existingStory });
        } else {
            // Create a new story document
            const newStory = new Story({
                user: userId,
                media: results,
            });

            await newStory.save();
            res.status(200).json({ message: "Stories uploaded", story: newStory });
        }
    } catch (error) {
        console.error("Error uploading stories:", error.message);
        res.status(500).json({ error: "Error uploading stories" });
    }
};

const getStories = async (req, res) => {
    // ... (Your getStories function remains the same, no changes needed for file upload logic)
    const { userId } = req.params;

    try {
        const userStories = await Story.findOne({ user: userId })
            .populate('user', 'username profilePicture') // Populate specific user fields
            .sort({ createdAt: -1 }); // Sort by most recent first, though for a single user, only one document is expected

        if (!userStories) {
            return res.status(404).json({ message: "No stories found for this user" });
        }

        res.status(200).json({ story: userStories });
    } catch (error) {
        console.error("Error fetching user stories:", error.message);
        res.status(500).json({ error: "Failed to fetch user stories" });
    }
};

module.exports = { storyUpload, getStories };



















// const Story = require("../models/storySchema");
// const cloudinary = require('../config/cloudinary'); // Import Cloudinary

// const storyUpload = async (req, res) => {
//     let results = [];
//     try {
//         if (req.files && req.files.length > 0) {
//             // Upload each file to Cloudinary
//             for (const file of req.files) {
//                 const result = await cloudinary.uploader.upload(file.path, {
//                     folder: 'posts',
//                     resource_type: 'auto', // Auto-detect image/video
//                 });
//                 results.push({
//                     url: result.secure_url,
//                     type: result.resource_type,
//                 });
//             }
//         } else {
//             return res.status(400).json({ error: 'No files uploaded' });
//         }

//         // const userId = req.user.id;
//         const userId = req.body.userId;     

//         // Check if the user already has a story
//         let existingStory = await Story.findOne({ user: userId });

//         if (existingStory) {
//             // Append new media to the existing story
//             existingStory.media.push(...results);
//             await existingStory.save();
//             res.status(200).json({ message: "Stories added", story: existingStory });
//         } else {
//             // Create a new story document
//             const newStory = new Story({
//                 user: userId,
//                 media: results,
//             });

//             await newStory.save();
//             res.status(200).json({ message: "Stories uploaded", story: newStory });
//         }
//     } catch (error) {
//         console.error("Error uploading stories:", error.message);
//         res.status(500).json({ error: "Error uploading stories" });
//     }
// };




// const getStories = async (req, res) => {
//     const { userId } = req.params;

//     try {
//         const userStories = await Story.findOne({ user: userId })
//             .populate('user', 'username profilePicture') // Populate specific user fields
//             .sort({ createdAt: -1 }); // Sort by most recent first, though for a single user, only one document is expected

//         if (!userStories) {
//             return res.status(404).json({ message: "No stories found for this user" });
//         }

//         res.status(200).json({ story: userStories });
//     } catch (error) {
//         console.error("Error fetching user stories:", error.message);
//         res.status(500).json({ error: "Failed to fetch user stories" });
//     }
// };


// module.exports = { storyUpload, getStories };