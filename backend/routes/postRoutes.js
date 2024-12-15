const express = require("express");
const { getAllPosts, createPost } = require("../controllers/postController");
const authMiddleware = require("../middleware/authMiddleware"); // Auth middleware to protect routes
const { validatePostData } = require("../middleware/validationMiddleware"); // Custom validation middleware
const router = express.Router();

// Get all posts (public route)
router.get("/", getAllPosts);  // Reuse the getAllPosts controller for fetching posts

// Create a new post (protected route, requires authentication)
router.post("/", authMiddleware, validatePostData, async (req, res) => {
  console.log("User:", req.user); // Check if user is attached to request
  try {
    const { title, description, location, price, type, user } = req.body;
    
    // Ensure all required fields are present
    if (!title || !description || !location || !price || !type || !user) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const post = await createPost(
      { title, description, location, price, type, user },
      req.user.id // Assuming user is attached by authMiddleware
    );

    res.status(201).json({
      message: "Post created successfully",
      post: {
        id: post._id,
        title: post.title,
        description: post.description,
        location: post.location,
        price: post.price,
        type: post.type,
        user: post.user,
      },
    });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ message: "Failed to create post" });
  }
});

module.exports = router;
