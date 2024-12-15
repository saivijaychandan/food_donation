import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloatingButton.css'; // Import the CSS for styling

const FloatingButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/create-post');
  };

  return (
    <button className="floating-button" onClick={handleClick}>
      <i className="fas fa-pencil-alt"></i>
    </button>
  );
};

export default FloatingButton;
