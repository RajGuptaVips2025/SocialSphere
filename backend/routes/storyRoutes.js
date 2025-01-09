// routes/storyRoutes.js
const express = require("express");
const router = express.Router();
const upload = require('../middlewares/uploadMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const { storyUpload } = require("../controllers/storyController");

// POST: Upload Story
router.post("/uploadStory",authMiddleware,  upload.single('media'), storyUpload);

module.exports = router;
