const { validationResult } = require("express-validator");
const Course = require("../models/course.model");

const getAllCourses = async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
};

const getCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.courseId);
    if (!course) {
      return res.status(404).json({ msg: "No courses Found!!" });
    }
    res.json(course);
  } catch {
    return res.status(400).json({ msg: "Invalid Object Id" });
  }
};

const createCourse = async (req, res) => {
  console.log(req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }
  const newCourse = new Course(req.body);
  await newCourse.save();

  res.status(201).json(newCourse);
};

const updateCourse = async (req, res) => {
  const courseId = req.params.courseId;

  try {
    const updateCourse = await Course.updateOne(
      { _id: courseId },
      { $set: { ...req.body } }
    );
    return res.status(200).json(updateCourse);
  } catch (e) {
    return res.status(400).json(e);
  }
};

const deleteCourse = async (req, res) => {
  await Course.deleteOne({_id: req.params.courseId})
  res.status(200).json({ success: true });
};

module.exports = {
  getAllCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
};
