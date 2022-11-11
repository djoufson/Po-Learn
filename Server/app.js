const express = require('express')
const morgan = require('morgan')


const courseRouter = require('./routes/coursesRoutes')
// create the express app
const app = express()

if(process.env['NODE_ENV'] === 'development'){
  app.use(express.json())
}

// Use middleware
app.use(morgan('dev'))
app.use(express.static(` ${ __dirname }/public`))

// Define different routers
app.use('/api/v1/courses', courseRouter)

module.exports = app