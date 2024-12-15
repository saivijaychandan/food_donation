import React from "react";
import { Navigate } from "react-router-dom";

const ProtectRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("userInfo"));

  if (!user) {
    // Redirect to login if the user is not authenticated
    return <Navigate to="/login" replace />;
  }

  return children; // Render the protected route's content
};

export default ProtectRoute;
