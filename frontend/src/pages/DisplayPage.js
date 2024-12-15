import React from "react";
import { useNavigate } from "react-router-dom";
import './DisplayPage.css';

const DisplayPage = () => {
  const navigate = useNavigate();

  return (
    <div className="display-page-container">
      <header className="header">
        <h1>Welcome to Food Donation Platform</h1>
        <p>Connecting those in need with those who can help.</p>
      </header>
      <main className="main-content">
        <section className="info-section">
          <h2>What We Do</h2>
          <p>
            Our platform helps individuals and organizations donate or request food effortlessly.
            Whether you're looking to donate surplus food or request help, we provide a seamless
            way to connect with others in your area.
          </p>
        </section>
        <section className="cta-section">
          <h2>Get Started</h2>
          <p>Create an account or log in to start creating and viewing food donation posts.</p>
          <div className="cta-buttons">
            <button className="btn-login" onClick={() => navigate("/login")}>
              Login
            </button>
            <button className="btn-signup" onClick={() => navigate("/signup")}>
              Sign Up
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DisplayPage;
