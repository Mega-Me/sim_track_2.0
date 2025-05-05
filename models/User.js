const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  regNo: { type: String, required: true, unique: true },
  email: { type: String },
  password: { type: String, required: true },
  position: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);
