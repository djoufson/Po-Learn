const express = require('express')
const courseController = require('../controllers/courseController')
const auth = require("./../Middlewares/auth")
const router = express.Router()

// Base route: '/api/v1/courses'
// All the courses related to a specific user

router
  .route('/selection')
  .get(courseController.getSelection)

router
  .route('/')
  .get(courseController.getAllCourses)
  .post(courseController.addCourse)

router
  .route('/:id')
  .put(courseController.updateCourse)

module.exports = router