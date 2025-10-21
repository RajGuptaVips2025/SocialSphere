// uploadMiddleware.js
const multer = require('multer');

// **CHANGE HERE: Use memoryStorage instead of diskStorage**
const storage = multer.memoryStorage();

const upload = multer({ storage });

module.exports = upload;
