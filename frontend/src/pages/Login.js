import React, { useState, useContext } from "react";
import { loginUser } from "../api";  // Assuming this makes the POST request to the server
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");  // State to hold error message
  const [isLoading, setIsLoading] = useState(false);  // Loading state for the button
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);  // Set loading state to true
    setError("");  // Reset error message before each submission
  
    try {
      // Await the promise returned by loginUser
      const data = await loginUser(credentials);
      
      console.log("Login successful:", data);  // Log the resolved data to verify its structure
      login(data.token);  // Save the token using your login function
      localStorage.setItem("authToken", data.token);  // Optionally store token in localStorage
      navigate("/home");  // Navigate to home or dashboard after login
    } catch (err) {
      console.error("Login error:", err);  // Log the error for debugging
      setError("Invalid credentials, please try again.");  // Set error if login fails
    } finally {
      setIsLoading(false);  // Reset loading state after request is complete
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="Email"
            className="login-input"
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            value={credentials.email}  // Make input a controlled component
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            value={credentials.password}  // Make input a controlled component
          />
          {error && <p className="error-message">{error}</p>}  {/* Display error message */}
          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;