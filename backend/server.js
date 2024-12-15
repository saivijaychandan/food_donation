const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose"); // Mongoose for MongoDB connection
const userRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const aiRoutes = require("./routes/aiRoutes");

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit the app if DB connection fails
  });

const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests

// API Routes
app.use("/api/auth", userRoutes); // Authentication routes
app.use("/api/posts", postRoutes); // Post routes
app.use("/api/ai", aiRoutes); // AI analysis routes

// Default route
app.get("/", (req, res) => {
  res.send("Food Donation App Backend is Running!");
});


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send({
    message: err.message || "Internal Server Error",
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
