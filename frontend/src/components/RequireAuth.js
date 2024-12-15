import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const RequireAuth = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the child components (protected route)
  return children;
};

export default RequireAuth;
