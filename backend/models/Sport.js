const mongoose = require('mongoose');

const sportSchema = new mongoose.Schema({
  name: { type: String, required: true }, // E.g. Badminton
  courts: [
    {
      courtNumber: { type: Number, required: true },
      isActive: { type: Boolean, default: true } // Allows disabling specific courts
    }
  ],
  timeSlots: { type: [String], required: true }, // E.g., ["09:00-10:00", "10:00-11:00"]
  operationalHours: {
    start: { type: String }, // E.g., "08:00"
    end: { type: String}   // E.g., "22:00"
  },
  center: { type: mongoose.Schema.Types.ObjectId, ref: 'Center', required: true }
});


module.exports = mongoose.model('Sport', sportSchema);
