const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  createUser,
  validateUser,
} = require('../controllers/userController');

// Get all users
router.get('/', getAllUsers);

// Create a new user
router.post('/', createUser);

// Validate user credentials
router.post('/validate-user', validateUser);

module.exports = router;
