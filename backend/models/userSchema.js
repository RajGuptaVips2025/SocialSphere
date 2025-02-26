const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');
// You can remove the passport-local-mongoose plugin if you are not using local auth.
const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  // Remove password field because we are using passwordless Google auth.
  // password: { type: String, required: true },

  // Optionally store the googleId to distinguish these users
  googleId: { type: String },

  profilePicture: { type: String, default: 'uploads/profilePicture.jpg' },
  bio: { type: String, default: 'king is here' },
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
  savedPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
  reelHistory: [{
    postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
    watchedAt: { type: Date, default: Date.now },
  }]
}, { timestamps: true });

// userSchema.plugin(plm);
// Remove the passport-local-mongoose plugin if not using local auth
userSchema.plugin(plm);

module.exports = mongoose.model('User', userSchema);










// const mongoose = require('mongoose');

// const userSchema = mongoose.Schema({
//   fullName: { type: String, required: true, unique: true },
//   username: { type: String, required: true, unique: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   profilePicture: { type: String, default: 'uploads/profilePicture.jpg' },
//   bio: { type: String, default: 'king is here' },
//   followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
//   following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
//   posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
//   savedPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
//   reelHistory: [{
//     postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
//     watchedAt: { type: Date, default: Date.now },
//   }]
// }, { timestamps: true });


// module.exports = mongoose.model('User', userSchema);
