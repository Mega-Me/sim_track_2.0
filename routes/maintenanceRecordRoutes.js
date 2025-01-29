const express = require('express');
const MaintenanceRecord = require('../models/maintenanceRecord');
const router = express.Router();

// Fetch all Maintenance Records
router.get('/', async (req, res) => {
  try {
    const records = await MaintenanceRecord.find();
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching maintenance records', error });
  }
});

// Add a New Maintenance Record
router.post('/', async (req, res) => {
  try {
    const {
      flightCrew,
      instructor1,
      maintDefect,
      maintenanceDoneByReg,
    } = req.body;

    const newRecord = new MaintenanceRecord({
      flightCrew,
      instructor1,
      maintDefect,
      maintenanceDoneByReg,
    });

    await newRecord.save();
    res.status(201).json({ message: 'Maintenance record added successfully', record: newRecord });
  } catch (error) {
    console.error('Error adding maintenance record:', error);
    res.status(500).json({ message: 'Failed to add maintenance record', error });
  }
});

module.exports = router;
