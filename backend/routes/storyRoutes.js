// routes/storyRoutes.js
const express = require("express");
const router = express.Router();
const upload = require('../middlewares/uploadMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const { storyUpload, getStories } = require("../controllers/storyController");

// POST: Upload Story
router.post("/uploadStory",  upload.array('media'), storyUpload);
router.get("/getStories/:userId",  getStories);

module.exports = router;
