const express = require('express');
const FlightRecord = require('../models/flightRecord'); // Import the FlightRecord model

const router = express.Router();

// Fetch all Flight Records
router.get('/', async (req, res) => {
  try {
    const flightRecords = await FlightRecord.find();
    res.status(200).json(flightRecords);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching flight records', error });
  }
});

// Add a New Flight Record
router.post('/', async (req, res) => {
  try {
    const {
      flightCrew,
      flightDate,
      instructor1,
      instructor2,
      trainee1,
      trainee2,
      startTime,
      endTime,
    } = req.body;

    // Create a new flight record object
    const newRecord = new FlightRecord({
      flightCrew,
      flightDate,
      instructor1: {
        name: instructor1?.name || '',
        reg: instructor1?.reg || '',
      },
      instructor2: {
        name: instructor2?.name || '',
        reg: instructor2?.reg || '',
      },
      trainee1: {
        name: trainee1?.name || '',
        reg: trainee1?.reg || '',
      },
      trainee2: {
        name: trainee2?.name || '',
        reg: trainee2?.reg || '',
      },
      startTime,
      endTime,
    });

    // Save the new record to the database
    await newRecord.save();
    res.status(201).json({ message: 'Flight record added successfully', record: newRecord });
  } catch (error) {
    console.error('Error adding flight record:', error);
    res.status(500).json({ message: 'Failed to add flight record', error });
  }
});

// Delete a Flight Record by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await FlightRecord.findByIdAndDelete(id);
    res.status(200).json({ message: 'Flight record deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting flight record', error });
  }
});

module.exports = router;
