module.exports = app => {
    const coachs = require("../controllers/coach.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Coach
    router.post("/", coachs.create);
  
    // Retrieve all Coaches
    router.get("/", coachs.findAll);
  
    // Retrieve all Coach
    router.get("/s/:username", coachs.findByUsername);
  
    // Retrieve a single Coach with id
    router.get("/:id", coachs.findOne);
  
    // Update a Coach with id
    router.put("/:id", coachs.update);
  
    // Delete a Coach with id
    router.delete("/:id", coachs.delete);
  
    // Create a new Coach
    router.delete("/", coachs.deleteAll);
  
    app.use('/api/coach', router);
  };