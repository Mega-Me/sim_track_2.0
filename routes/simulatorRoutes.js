const express = require('express');
const Simulator = require('../models/Simulator');

const router = express.Router();

// Fetch All Simulators
router.get('/', async (req, res) => {
  try {
    const simulators = await Simulator.find({}, 'name'); // Only return names
    res.status(200).json(simulators);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching simulators', error });
  }
});

// Add a New Simulator
router.post('/', async (req, res) => {
  try {
    const { name, type, vendor, installedOn, location } = req.body;

    if (!name || !type) {
      return res.status(400).json({ message: 'Name and Type are required' });
    }

    const newSimulator = new Simulator({ name, type,  vendor, installedOn, location });

    await newSimulator.save();
    res.status(201).json({ message: 'Simulator added successfully', simulator: newSimulator });
  } catch (error) {
    console.error('Error adding simulator:', error);
    res.status(500).json({ message: 'Failed to add simulator', error });
  }
});

module.exports = router;
