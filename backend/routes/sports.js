const express = require('express');
const router = express.Router();
const {
  getAllSports,
  createSport,
} = require('../controllers/sportController');

// Get all sports
router.get('/', getAllSports);

// Create a new sport and associate it with a center
router.post('/:centerId', createSport);

module.exports = router;
