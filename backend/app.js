const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const centerRoutes = require('./routes/centers');
const bookingRoutes = require('./routes/bookings');
const sportRoutes = require('./routes/sports');
const userRoutes = require('./routes/users'); 
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Route middlewares
app.use('/centers', centerRoutes);
app.use('/bookings', bookingRoutes);
app.use('/sports', sportRoutes);
app.use('/users', userRoutes); 

// Connect to MongoDB
connectDB();

// Start the server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
