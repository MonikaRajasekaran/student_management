// models/Student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  age: { type: Number, required: true },
  batch: {
    start: { type: Date, required: true },
    end: { type: Date, required: true },
  },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' }
});

module.exports = mongoose.model('Student', studentSchema);
