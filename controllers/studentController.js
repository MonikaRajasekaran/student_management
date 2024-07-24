// controllers/studentController.js
const Student = require('../models/Student');

exports.createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find().populate('course');
    res.status(200).json(students);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
