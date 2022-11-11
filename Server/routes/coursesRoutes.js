const express = require('express')
const courseController = require('../controllers/courseController')
const auth = require("./../Middlewares/auth")
const router = express.Router()

// All the courses related to a specific user

router
  .route('/selection')
  .get(courseController.getSelection)

router
  .route('/:id')
  .get(courseController.getAllCourses)
  .post(auth, courseController.addCourse)

module.exports = router