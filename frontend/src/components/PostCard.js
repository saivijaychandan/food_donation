import React from 'react';
import { useNavigate } from 'react-router-dom';


const PostCard = ({ post }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Ensure the ID is valid
    if (post._id) {
      navigate(`/post/${post._id}`, { state: { post } });
    } else {
      console.error("Post ID is undefined");
    }
  };

  return (
    <div className="card" onClick={handleClick}>
      <h3 className="title">{post.title}</h3>
      <p><strong>Type:</strong> {post.type}</p>
      <p><strong>Price:</strong> {post.price}</p>
      <p><strong>Location:</strong> {post.location}</p>
    </div>
  );
};

export default PostCard;