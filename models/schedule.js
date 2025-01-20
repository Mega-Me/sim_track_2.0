const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  simulator: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  crew: { type: String, required: true },
});

module.exports = mongoose.model('Schedule', scheduleSchema);
