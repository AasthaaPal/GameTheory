const mongoose = require('mongoose');
const centerSchema = new mongoose.Schema({
  location: { type: String, required: true },
  address: { type: String }, // Detailed address of the center
  contact: { type: String }, // E.g., phone number or email
  sports: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Sport' }],
  isActive: { type: Boolean, default: true } // Status to manage operational centers
});


module.exports = mongoose.model('Center', centerSchema);
