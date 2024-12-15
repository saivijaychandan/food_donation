import React, { useState } from "react";
import { analyzePost } from "../api";

const AIAnalysis = () => {
  const [analysisData, setAnalysisData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [postDetails, setPostDetails] = useState({
    location: "",
    foodType: "",
    quantity: "",
    targetPeople: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await analyzePost(postDetails);
      setAnalysisData(data);
    } catch (error) {
      console.error("Error analyzing the post", error);
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>AI Analysis for Food Donations</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Location:</label>
          <input
            type="text"
            placeholder="Enter location"
            value={postDetails.location}
            onChange={(e) =>
              setPostDetails({ ...postDetails, location: e.target.value })
            }
          />
        </div>
        <div>
          <label>Food Type:</label>
          <input
            type="text"
            placeholder="Enter food type (e.g., rice, bread)"
            value={postDetails.foodType}
            onChange={(e) =>
              setPostDetails({ ...postDetails, foodType: e.target.value })
            }
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="text"
            placeholder="Enter quantity (e.g., 10kg, 50 servings)"
            value={postDetails.quantity}
            onChange={(e) =>
              setPostDetails({ ...postDetails, quantity: e.target.value })
            }
          />
        </div>
        <div>
          <label>Target Number of People:</label>
          <input
            type="number"
            placeholder="Enter number of people"
            value={postDetails.targetPeople}
            onChange={(e) =>
              setPostDetails({ ...postDetails, targetPeople: e.target.value })
            }
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </form>
      {analysisData && (
        <div className="analysis-results">
          <h3>Analysis Results</h3>
          <p>
            <strong>Location Feasibility:</strong> {analysisData.feasibility}
          </p>
          <p>
            <strong>Recommended Action:</strong> {analysisData.recommendation}
          </p>
          <p>
            <strong>Estimated Impact:</strong> {analysisData.impact} people can
            benefit.
          </p>
        </div>
      )}
    </div>
  );
};

export default AIAnalysis;
