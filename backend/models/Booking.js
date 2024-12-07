const mongoose = require('mongoose');


const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },// Reference to User
  location: { type: mongoose.Schema.Types.ObjectId, ref: 'Center', required: true },// Reference to Center
  sport: { type: mongoose.Schema.Types.ObjectId, ref: 'Sport', required: true },// Reference to Sport
  court: { type: Number, required: true },
  time: { type: String, required: true },
  date: { type: Date, required: true },
  status: {
    type: String,
    enum: ['confirmed', 'cancelled', 'completed'], // Booking status options
    default: 'confirmed' // Default status is 'confirmed'
   },
  isPaid: { type: Boolean, default: false }, // Tracks payment status 
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // User who created the booking
});


module.exports = mongoose.model('Booking', bookingSchema);

