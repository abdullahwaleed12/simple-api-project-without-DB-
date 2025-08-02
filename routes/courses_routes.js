const express = require("express");
const {body} = require('express-validator');
const router = express.Router();
const courseController = require("../controllers/courses.controll");
const { validationSchema } = require("../middlewares/validationSchema");
const verifyToken = require("../middlewares/verifyTokeon");
const userRoles = require("../utils/user-role");
const userModel = require("../models/user.model");
const allowedto = require("../middlewares/allowedTo");
router.route("/")
      .get(courseController.getAllCourses)
      .post(verifyToken , validationSchema() , courseController.createCourse)


router.route("/:courseId")
      .get(courseController.getCourse)
      .patch(courseController.updateCourse)
      .delete(verifyToken, allowedto(userRoles.ADMIN, userModel), courseController.deleteCourse)


module.exports = router;