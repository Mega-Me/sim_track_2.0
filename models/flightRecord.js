const mongoose = require('mongoose');

const FlightRecordSchema = new mongoose.Schema({
  flightCrew: { type: String, required: true },
  flightDate: { type: String, required: true },
  instructor1: {
    name: { type: String, default: '' },
    reg: { type: String, default: '' },
  },
  instructor2: {
    name: { type: String, default: '' },
    reg: { type: String, default: '' },
  },
  trainee1: {
    name: { type: String, default: '' },
    reg: { type: String, default: '' },
  },
  trainee2: {
    name: { type: String, default: '' },
    reg: { type: String, default: '' },
  },
  startTime: { type: String, default: '' },
  endTime: { type: String, default: '' },
});

module.exports = mongoose.model('FlightRecord', FlightRecordSchema);
