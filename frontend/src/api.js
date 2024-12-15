import axios from "axios";


// Create an axios instance with the base URL
const API = axios.create({ baseURL: "http://localhost:5000/api",headers: {
  "Content-Type": "application/json",
}, });

// Add an interceptor to include the token in the headers for each request if it's available
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`; // Include the token in the Authorization header
  }
  return req;
});

// Attach Authorization token to requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Login user
export const loginUser = async (data) => {
  try {
    const response = await API.post("/auth/login", data);
    return response.data; // Return the response data (including the token)
  } catch (error) {
    // Log error message to console and re-throw the error for handling in components
    console.error("Login failed:", error.response ? error.response.data : error.message);
    throw error;
  }
};

// Signup user
export const signupUser = async (data) => {
  try {
    const response = await API.post("/auth/signup", data);
    return response.data; // Return the response data after successful signup
  } catch (error) {
    console.error("Signup failed:", error.response ? error.response.data : error.message);
    throw error;
  }
};

// Fetch all posts
export const fetchPosts = async () => {
  try {
    const response = await API.get("/posts");
    return response.data; // This should be the array of posts directly
  } catch (error) {
    console.error("Error fetching posts:", error.response ? error.response.data : error.message);
    throw error;
  }
};

// Create a new post
export const createPost = async (data) => {
  try {
    const response = await API.post("/posts", data);
    return response.data;
  } catch (error) {
    console.error("Error creating post:", error.response ? error.response.data : error.message);
    throw error;
  }
};

// Analyze a post using AI
export const analyzePost = async (data) => {
  try {
    const response = await API.post("/ai/analyze", data);
    return response.data;
  } catch (error) {
    console.error("Error analyzing post:", error.response ? error.response.data : error.message);
    throw error;
  }
};

export const getChatbotResponse = async (content) => {
  try {
    const response = await axios.post('https://api.gemini.com/chat', {
      headers: {
        'Authorization': `Bearer API_KEY`, // Replace with your API key
        'Content-Type': 'application/json',
      },
      data: {
        prompt: content, // Pass page content to the API
        model: 'gemini-1.5-flash', // Use the appropriate model (replace with actual model name)
        max_tokens: 100,
      },
    });
    return response.data.reply;
  } catch (error) {
    console.error("Error getting chatbot response:", error);
    throw error;
  }
};