const express = require('express')
const userController = require('./../controllers/userController')

const router = express.Router()

// Base route: '/api/v1'
router
  .route('/login')
  .post(userController.login)

module.exports = router