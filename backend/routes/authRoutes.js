const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const router = express.Router();

// Signup route
router.post("/signup", registerUser);

// Login route
router.post("/login", loginUser);

module.exports = router;
