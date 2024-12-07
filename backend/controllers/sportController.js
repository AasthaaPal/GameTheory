const Sport = require('../models/Sport');
const Center = require('../models/Center');

// Get all sports
const getAllSports = async (req, res) => {
  try {
    const sports = await Sport.find().populate('center', 'location'); // Populate center details (only location field)
    res.json(sports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new sport and associate it with a center
const createSport = async (req, res) => {
  const { name, courts, timeSlots } = req.body;

  try {
    // Validate the center ID
    const center = await Center.findById(req.params.centerId);
    if (!center) {
      return res.status(404).json({ message: 'Center not found' });
    }

    // Validate the courts array
    if (!Array.isArray(courts) || courts.length === 0) {
      return res.status(400).json({ message: 'Courts must be an array and cannot be empty.' });
    }

    // Validate timeSlots array
    if (!Array.isArray(timeSlots) || timeSlots.length === 0) {
      return res.status(400).json({ message: 'Time slots must be an array and cannot be empty.' });
    }

    // Create a new sport
    const newSport = new Sport({
      name,
      courts, // Expect courts array in the format [{ courtNumber, isActive }]
      timeSlots, // Expect timeSlots array
      center: req.params.centerId, // Associate with the center
    });

    // Save the sport to the database
    const savedSport = await newSport.save();

    // Add the new sport's ObjectId to the center's sports array
    center.sports.push(savedSport._id);
    await center.save(); // Save the updated center

    res.status(201).json(savedSport); // Respond with the saved sport
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllSports,
  createSport,
};
