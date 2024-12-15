exports.analyzeFood = async (req, res) => {
    const { location, numberOfPeople } = req.body;
  
    // Simulated AI logic
    const suggestion = numberOfPeople > 20 ? "Large donation recommended" : "Small donation sufficient";
    res.status(200).json({ message: `AI Analysis for ${location}: ${suggestion}` });
  };
  