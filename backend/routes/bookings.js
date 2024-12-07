const express = require('express');
const router = express.Router();
const {
  getAllBookings,
  createBooking,
} = require('../controllers/bookingController');

// Get all bookings
router.get('/', getAllBookings);

// Create a new booking
router.post('/', createBooking);

module.exports = router;

