import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreatePost from "./pages/CreatePost";
import RequireAuth from './components/RequireAuth'
import DisplayPage from "./pages/DisplayPage";

import PostPage from "./pages/PostPage";
import Chatbot from "./pages/Chatbot";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<DisplayPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/ai" element={<Chatbot />} />
        <Route path="/post/:id" element={<PostPage />} /> 
      </Routes>
    </Router>
  );
};

export default App;
