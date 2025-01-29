const mongoose = require('mongoose');

const MaintenanceRecordSchema = new mongoose.Schema({
  flightCrew: { type: String, required: true },
  instructor1: {
    name: { type: String, required: true },
    reg: { type: String, required: true },
  },
  maintDefect: {
    maintDefectReportedDate: { type: String, required: true },
    maintDefectDescription: { type: String, required: true },
    maintDefectResolution: { type: String, default: null },
    maintDefectClosedDate: { type: String, default: null },
  },
  maintenanceDoneByReg: { type: String, default: null },
});

module.exports = mongoose.model('MaintenanceRecord', MaintenanceRecordSchema);
