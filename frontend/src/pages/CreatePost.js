import React, { useState } from "react";
import { createPost } from "../api";
import './CreatePost.css';

const CreatePost = () => {
  const [post, setPost] = useState({
    title: "",
    description: "",
    location: "",
    price: "",
    type: "Donation",
    user: "vijay", // Default value
  });

  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple form validation
    if (!post.title || !post.description || !post.location || !post.price || !post.type) {
      setError("Title and Description are required. 2");
      return;
    }

    setError(null); // Clear any previous errors
    setLoading(true); // Set loading state to true

    // Parse price to number
    const postData = {
      ...post,
      price: post.price ? parseFloat(post.price) : 0, // Convert price to a number if provided
    };

    try {
      // Call the API to create the post
      await createPost(postData);
      // Reset the form after submission
      setPost({
        title: "",
        description: "",
        location: "",
        price: "",
        type: "Donation",
        user: "vijay", // Default value
      });
    } catch (error) {
      setError("Error creating post. Please try again.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="create-post-container">
      <div className="create-post-header">
        <h2>Create Food Donation Post</h2>
      </div>
      <form className="create-post-form" onSubmit={handleSubmit}>
        {error && <div className="error-message">{error}</div>} 
        
        <input
          type="text"
          className="form-input"
          placeholder="Title"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <textarea
          className="form-textarea"
          placeholder="Description"
          value={post.description}
          onChange={(e) => setPost({ ...post, description: e.target.value })}
        />
        <input
          type="text"
          className="form-input"
          placeholder="Location"
          value={post.location}
          onChange={(e) => setPost({ ...post, location: e.target.value })}
        />
        <input
          type="number"
          className="form-input"
          placeholder="Price"
          value={post.price}
          onChange={(e) => setPost({ ...post, price: e.target.value })}
        />
        {/* <input
          type="text"
          className="form-input"
          placeholder="Name"
          value={post.user}
          onChange={(e) => setPost({ ...post, user: e.target.value })}
        /> */}
        <select
          className="form-select"
          value={post.type}
          onChange={(e) => setPost({ ...post, type: e.target.value })}
        >
          <option value="Donation">Donation</option>
          <option value="Request">Request</option>
        </select>
        <button type="submit" className="form-button" disabled={loading}>
          {loading ? "Creating..." : "Create Post"} {/* Show loading text */}
        </button>
      </form>
    </div>
  );
};

export default CreatePost;