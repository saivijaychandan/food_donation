const express = require("express");
const { analyzeFood } = require("../controllers/aiController");
const router = express.Router();

// Analyze food post (handles AI analysis)
router.post("/analyze", analyzeFood);

module.exports = router;
