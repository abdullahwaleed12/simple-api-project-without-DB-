
let {courses} = require("../data/courses")

const {validationResult} = require('express-validator');

const getAllCourses = (req, res) => {
  res.json(courses);
}

const getCourse = (req, res) => {
  const courseID = +req.params.courseId;
  const course = courses.find((course) => course.id === courseID);

  if (!course) {
    return res.status(404).json({ msg: "No courses Found!!" });
  }
  res.json(course);
}

const createCourse = (req, res) => {
  console.log(req.body);
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json(errors.array())
  }
  courses.push({id: courses.length + 1, ...req.body})

  res.status(201).json(courses);
}

const updateCourse =  (req, res) => {
    const courseId = +req.params.courseId;
    let course = courses.find((course) => course.id === courseId);
    if(!course) {
      return res.status(404).json({msg : "No courses Found!!"})
    }
    course = {...course , ...req.body}
    res.status(200).json(course)
}

const deleteCourse = (req, res) => {
  const courseID = +req.params.courseId;
  courses = courses.filter((course) => course.id !== courseID)
  res.status(200).json({success: true});
}

module.exports = {
  getAllCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse
}