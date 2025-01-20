const express = require('express');
const Schedule = require('../models/schedule');

const router = express.Router();

// Fetch all Schedules
router.get('/', async (req, res) => {
  try {
    const schedules = await Schedule.find();
    res.status(200).json(schedules);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching schedules', error });
  }
});

// Add a New Schedule
router.post('/', async (req, res) => {
  const { simulator, startTime, endTime, crew } = req.body;

  const newSchedule = new Schedule({
    simulator,
    startTime,
    endTime,
    crew,
  });

  try {
    const savedSchedule = await newSchedule.save();
    res.status(201).json(savedSchedule);
  } catch (error) {
    res.status(500).json({ message: 'Error saving schedule', error });
  }
});

module.exports = router;
