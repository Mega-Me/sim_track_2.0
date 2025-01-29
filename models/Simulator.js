const mongoose = require('mongoose');

const SimulatorSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }, // Simulator Name
  type: { type: String, required: true },// Type of Simulator
  vendor: { type: String, required: true }, // Vendor of Simulator
  installedOn: { type: String, required: false }, 
  location: { type: String, required: false } // Optional Location
});

module.exports = mongoose.model('Simulator', SimulatorSchema);
