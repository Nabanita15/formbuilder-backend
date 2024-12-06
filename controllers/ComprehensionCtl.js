const comprehension = require("../models/Comprehension"); // Adjust path as needed

// Create a new comprehension
module.exports = {
  createComprehension: async (req, res) => {
    try {
      const newComprehension = new comprehension(req.body);
      const savedComprehension = await newComprehension.save();
      res.status(201).json(savedComprehension);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Get all comprehensions
  getAllComprehensions: async (req, res) => {
    try {
      const comprehensions = await comprehension.find();
      res.json(comprehensions);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Get a single comprehension by ID
  getComprehensionById: async (req, res) => {
    try {
      const comp = await comprehension.findById(req.params.id);
      if (!comp) return res.status(404).json({ message: "Not Found" });
      res.json(comp);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  // Update a comprehension by ID
  updateComprehension: async (req, res) => {
    try {
      const updatedComp = await comprehension.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (!updatedComp) return res.status(404).json({ message: "Not Found" });
      res.json(updatedComp);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Delete a comprehension by ID
  deleteComprehension: async (req, res) => {
    try {
      const deletedComp = await comprehension.findByIdAndDelete(req.params.id);
      if (!deletedComp) return res.status(404).json({ message: "Not Found" });
      res.json({ message: "Deleted Successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
