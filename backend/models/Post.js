const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  type: { type: String, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Ensure this references the correct model
    required: true,
  },
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
