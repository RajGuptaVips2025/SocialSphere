const mongoose = require("mongoose");

const mediaSchema = new mongoose.Schema({
    url: { type: String, required: true }, // URL for image/video
    type: { type: String, enum: ['image', 'video'], required: true }
});

const storySchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    media: { type: [mediaSchema], required: true }, // Array of media objects
    createdAt: { type: Date, default: Date.now, expires: 86400 } // Auto delete after 24 hours
});

const Story = mongoose.model("Story", storySchema);
module.exports = Story;

