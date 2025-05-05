const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('./db/moongoose')

// Import Routes
const flightRecordRoutes = require('./routes/flightRecordRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');
const maintenanceRoutes = require('./routes/maintenanceRecordRoutes');
const simulatorRoutes = require('./routes/simulatorRoutes');
const authRoutes = require('./routes/auth');



                      
// Initialize the Express App
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
const PORT = 5000;

// MongoDB Connection
// const mongoURI = 'mongodb://localhost:27017/simtrack'; // Replace with your MongoDB URI
// mongoose
//   .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.error('Error connecting to MongoDB:', err));

// API Routes
app.use(express.json())
app.use('/api/flight-records', flightRecordRoutes);
app.use('/api/maintenance-records', maintenanceRoutes);
app.use('/api/schedules', scheduleRoutes);
app.use('/api/simulators', simulatorRoutes);
app.use('/api/auth', authRoutes);

// Test Route
app.get('/', (req, res) => {
  res.send('SimTrack Backend API is running');
});

module.exports = app;
// Start the Server

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
