const Post = require("../models/Post");
const mongoose = require("mongoose");

exports.getAllPosts = async (req, res) => {
  try {
    // Fetch all posts from the database
    const posts = await Post.find();
    
    if (!posts || posts.length === 0) {
      // If no posts are found, respond with a 404
      return res.status(404).json({ message: "No posts found" });
    }

    // Send posts as a JSON response with status 200
    return res.status(200).json(posts);
  } catch (error) {
    // Log the error and send a 500 response with the error message
    console.error("Error fetching posts:", error.message);
    return res.status(500).json({ message: "Failed to retrieve posts", error: error.message });
  }
};

exports.createPost = async (postData, userId) => {
  try {
    // Ensure userId is a valid ObjectId
    const validUserId = new mongoose.Types.ObjectId(userId); // Use 'new' to create ObjectId instance

    // Create a new post with the required fields
    const newPost = new Post({
      title: postData.title,
      description: postData.description,
      location: postData.location,
      price: postData.price,
      type: postData.type, // Include price
      user: validUserId, // Attach the valid userId (converted to ObjectId)
    });

    // Save the new post to the database
    const savedPost = await newPost.save();
    console.log(savedPost);

    // Return the saved post
    return savedPost;
  } catch (error) {
    // Log the error and throw a more detailed error
    console.error("Error creating post:", error.message);
    throw new Error("Failed to create post: " + error.message); // Provide the error details
  }
};
