import React, { useState } from 'react';

import './CreatePost.css'


const CreatePost = ({ onPostCreate }) => {
  const [title, setTitle] = useState('');
  const [food, setFood] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { title, food, price, location, description };

    try {
      // Send the new post to the backend
      const response = await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost), // Send the post data as JSON
      });

      if (!response.ok) {
        throw new Error('Failed to add post');
      }

      const savedPost = await response.json(); // Get the saved post from the backend

      // Update the parent component's state
      if (typeof onPostCreate === 'function') {
        onPostCreate(savedPost); // Pass the saved post to the parent component
      } else {
        console.error('onPostCreate is not a function');
      }

      // Reset form fields
      setTitle('');
      setFood('');
      setPrice('');
      setLocation('');
      setDescription('');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="create_post_container">
      <form className="form" onSubmit={handleSubmit}>
        <h3>Create a Post</h3>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Food Available"
          value={food}
          onChange={(e) => setFood(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default CreatePost;