import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './PostPage.css'; // Import the CSS file

const PostPage = () => {
  const { id } = useParams(); // Get post ID from URL params
  const [post, setPost] = useState(null);
  const { state } = useLocation(); // Get post data from navigation state if available

  useEffect(() => {
    if (state && state.post) {
      setPost(state.post); // If post data is passed in the state, use that
    } else {
      // If no state is available, fetch the post by ID from the API
      fetchPostById(id);
    }
  }, [id, state]);

  const fetchPostById = async (id) => {
    try {
      const response = await fetch(`/api/posts/${id}`); // Replace with your actual API endpoint
      const data = await response.json();
      setPost(data);
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  if (!post) {
    return <div className="loading">Loading...</div>; // Display loading until the post is fetched
  }

  return (
    <div className="post-page">
      <div className="post-header">
        <h2>{post.title}</h2>
      </div>
      <div className="post-details">
      <p><span className="post-label">Posted by:</span> {post.user}</p>
        <p><span className="post-label">Type:</span> {post.type}</p>
        <p><span className="post-label">Price:</span> {post.price}</p>
        <p><span className="post-label">Location:</span> {post.location}</p>
        <p><span className="post-label">Description:</span> {post.description}</p>
      </div>
    </div>
  );
};

export default PostPage;
