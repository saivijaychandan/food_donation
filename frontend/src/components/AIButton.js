import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AIButton.css'; // Import the CSS for styling

const AIButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/ai');
  };

  return (
    <button className="afloating-button" onClick={handleClick}>
      <i className="fas fa-robot"></i>
    </button>
  );
};

export default AIButton;
