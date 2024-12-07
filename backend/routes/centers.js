
const express = require('express');
const router = express.Router();
const {
  getAllCenters,
  createCenter,
} = require('../controllers/centerController');

// Get all centers
router.get('/', getAllCenters);

// Create a new center
router.post('/', createCenter);

module.exports = router;
