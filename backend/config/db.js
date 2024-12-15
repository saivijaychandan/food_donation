const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Attempt to connect to MongoDB using the connection string from the environment variable
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    // Log the error details and exit the process with a failure code
    console.error("Error connecting to MongoDB:", error.message);
    // Optionally log stack trace for deeper insights
    console.error(error.stack);
    process.exit(1); // Exit the process if the database connection fails
  }
};

module.exports = connectDB;