// models/Course.js
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  shortId: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, enum: ['UG', 'PG'], required: true }
});

module.exports = mongoose.model('Course', courseSchema);
