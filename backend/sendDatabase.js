const samplePost = new Post({
    title: "Food Donation",
    description: "Leftover food available for 20 people.",
    location: "Bangalore",
    price: 0, // Free donation
    type: "Donation",
    user: "64b2d8c8cbe8e9e3d5f8f123", // Replace with an actual user ID
  });
await samplePost.save();