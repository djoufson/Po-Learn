const express = require('express')
const morgan = require('morgan')
const path = require("path")
let dir = path.join(__dirname, "public")
// Routers
const courseRouter = require('./routes/coursesRoutes')
const usersRouter = require('./routes/usersRoutes')

// Create the express app
const app = express()

// Use middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.static(dir))
console.log(dir)

// Define different routers
app.use('/api/v1', usersRouter)
app.use('/api/v1/courses', courseRouter)

module.exports = app