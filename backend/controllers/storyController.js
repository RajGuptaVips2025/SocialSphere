const Story = require("../models/storySchema");
const cloudinary = require('../config/cloudinary'); // Import Cloudinary

const storyUpload = async (req, res) => {
    let result;
    try {
        if (req.file) {
            try {
                // Upload the file to Cloudinary
                result = await cloudinary.uploader.upload(req.file.path, {
                    folder: 'posts',
                    resource_type: 'auto', // Automatically determine resource type (image, video, etc.)
                });
            } catch (error) {
                console.error('Cloudinary upload failed:', error.message);
                return res.status(500).json({ error: 'Failed to upload to Cloudinary' });
            }
        }

        const userId = req.user.id;

        // Check if the user already has a story
        let existingStory = await Story.findOne({ user: userId });

        if (existingStory) {
            // Push the new story to the existing array
            existingStory.media.push({
                url: result.secure_url,
                type: result.resource_type
            });
            await existingStory.save();
            res.status(200).json({ message: "Story added to existing story set", story: existingStory });
        } else {
            // Create a new story document
            const newStory = new Story({
                user: userId,
                media: [{
                    url: result.secure_url,
                    type: result.resource_type
                }]
            });

            await newStory.save();
            res.status(200).json({ message: "Story uploaded successfully", story: newStory });
        }
    } catch (error) {
        res.status(500).json({ message: "Error uploading story", error });
    }
};

module.exports = { storyUpload };




// const Story = require("../models/storySchema");
// const cloudinary = require('../config/cloudinary'); // Import Cloudinary


// const storyUpload = async (req, res) => {
//     let result;
//     try {
//         if (req.file) {
//             // Update the profile image field
//             try {
//                 result = await cloudinary.uploader.upload(req.file.path, {
//                     folder: 'posts',
//                     resource_type: 'auto', // Automatically determine resource type (image, video, etc.)
//                 });
//             } catch (error) {
//                 console.error('Cloudinary upload failed:', error.message);
//                 return res.status(500).json({ error: 'Failed to upload to Cloudinary' });
//             }
//         }

//         const newStory = new Story({
//             user: req.user.id,
//             media: result.secure_url,
//             type:result.resource_type
//         });

//         await newStory.save();
//         res.status(200).json({ message: "Story uploaded successfully", story: newStory });
//     } catch (error) {
//         res.status(500).json({ message: "Error uploading story", error });
//     }
// }


// module.exports = { storyUpload }