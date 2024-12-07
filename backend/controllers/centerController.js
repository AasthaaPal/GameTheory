const Center = require('../models/Center');

// Get all centers
const getAllCenters = async (req, res) => {
  try {
    const centers = await Center.find().populate('sports');
    res.json(centers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new center
const createCenter = async (req, res) => {
  const { location, sports } = req.body;
  const center = new Center({ location, sports });

  try {
    const savedCenter = await center.save();
    res.status(201).json(savedCenter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllCenters,
  createCenter,
};
