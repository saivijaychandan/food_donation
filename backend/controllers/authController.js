const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user" });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log("Login request received for:", email);
    console.log("password:",password)
    // Step 1: Find user by email
    const user = await User.findOne({ email });
    
    console.log("Database query completed. User found:", !!user); // Log whether user was found

    if (!user) {
      console.log("User not found in database:", email);
      return res.status(404).json({ message: "User not found" });
    }

    // Step 2: Compare password
    console.log("User found. Verifying password...");
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password verification result:", isMatch);

    if (!isMatch) {
      console.log("Password mismatch for user:", email);
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Step 3: Generate JWT token
    console.log("Credentials valid. Generating JWT...");
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    console.log("Token generated successfully:", token);
    return res.status(200).json({
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.error(email);
    console.error(password);
    console.error("Unexpected error in login handler:", error);
    return res.status(500).json({ message: "Error logging in" });
  }
};
