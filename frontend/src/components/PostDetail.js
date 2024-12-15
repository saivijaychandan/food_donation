import React from 'react';
import { useLocation } from 'react-router-dom';


const PostDetails = () => {
  const { state } = useLocation();
  const { post } = state;

  return (
    <div className={details_container}>
      <h2>{post.title}</h2>
      <p><strong>Food Available:</strong> {post.food}</p>
      <p><strong>Price:</strong> {post.price}</p>
      <p><strong>Location:</strong> {post.location}</p>
      <p><strong>Description:</strong> {post.description}</p>
    </div>
  );
};

export default PostDetails;