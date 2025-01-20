const mongoose = require('mongoose');
const FlightRecord = require('./models/flightRecord'); // Adjust path based on your project structure

const mongoURI = 'mongodb://localhost:27017/simtrack';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

const sampleData = [
  { flightCrewLogo: "assets/logos/et.png", flightCrew: "ET", flightDate: "2025-01-05" },
  { flightCrewLogo: "assets/logos/kq.png", flightCrew: "KQ", flightDate: "2025-01-06" },
  { flightCrewLogo: "assets/logos/taag.png", flightCrew: "TAAG", flightDate: "2025-01-07" }
];

FlightRecord.insertMany(sampleData)
  .then(() => {
    console.log('Sample data added successfully');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error adding sample data:', err);
    mongoose.connection.close();
  });
