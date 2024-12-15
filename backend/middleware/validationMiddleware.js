// validationMiddleware.js
const validatePostData = (req, res, next) => {
    const { title, description, location, price, type, user } = req.body;
    console.log(title,description, location, price, type, user);
    if (!title) {
      console.log(title);
      return res.status(400).json({ message: "Title is required 1" });
    }
    if (!description){
      console.log(description);
      return res.status(400).json({ message: " description is required 1" });
    }
    if(!location){
      console.log(location);

      return res.status(400).json({ message: " location is required 1" });
    }
    if(!price){
      console.log(price);
      return res.status(400).json({ message: " price is required 1" });
    }
    if(!type){
      console.log(type);
      return res.status(400).json({ message: " type is required 1" });
    }
    // if(!user){
    //   console.log("user is not defined");
    //   return res.status(400).json({ message: " user is required 1" });
    // }
    next(); // If validation passes, move to the next middleware/route handler
};
  
module.exports = { validatePostData };