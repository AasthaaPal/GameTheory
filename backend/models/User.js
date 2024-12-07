const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({

  username: { type: String, required: true, unique: true },
  PIN: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['customer', 'Admin'], default: 'Admin' }, // Role-based access
  isActive: { type: Boolean, default: true }, // Soft delete flag
  balance: { type: Number, default: 0 },
}); 


module.exports = mongoose.model('User', userSchema);

