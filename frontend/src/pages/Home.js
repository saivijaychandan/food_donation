import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api"; // Ensure this function is working properly
import PostCard from "../components/PostCard";
import './Home.css';
import FloatingButton from "../components/FloatingButton";
import AIButton from "../components/AIButton";

const Home = () => {
  const [posts, setPosts] = useState([]);  // Ensure posts are initialized as an empty array
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(""); // Error state
  
  //Promises error was there
  useEffect(() => {
    const getPosts = () => {
      setLoading(true);
      fetchPosts()
        .then((data) => {
          console.log("API Response:", data);
          if (Array.isArray(data)) {
            setPosts(data);
          } else {
            console.error("Unexpected response format:", data);
            setError("Unexpected response format.");
          }
        })
        .catch((err) => {
          console.error("Error fetching posts:", err.message || err);
          setError("Failed to fetch posts. Please try again later.");
        })
        .finally(() => {
          setLoading(false);
        });
    };
    getPosts();
  }, []);

  if (loading) {
    return <div className="loading">Loading posts...</div>; // Loading message
  }

  return (
    <div className="home-container">
      <div className="home-header">
        
        <h2>Food Donation Posts</h2>
        <p>Browse and find food donation opportunities near you!</p>
      </div>
      
      <div className="post-list">
        {posts.length === 0 ? (
          <p>No posts available at the moment.</p> // Message if no posts are found
        ) : (
          posts.map((post) => (
            <div key={post._id} className="post-card">
              <PostCard post={post} />
            </div>
          ))
        )}
      </div>
      <div className="button-container">
        
        <FloatingButton />
      </div>
      
    </div>
  );
};

export default Home;
