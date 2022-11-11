const express = require('express')
const morgan = require('morgan')

// create the express app
const app = express()
const port = 3030
app.use(express.json())

// Use middleware
app.use(morgan('dev'))

// listen for requests
app.listen(port)
const getSelection = (req, res) => {
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aperiam voluptates dolore quos. Ipsam atque, praesentium reiciendis quod error necessitatibus dolorum quo ex a quae aut aspernatur, beatae nihil quidem!'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aperiam voluptates dolore quos. Ipsam atque, praesentium reiciendis quod error necessitatibus dolorum quo ex a quae aut aspernatur, beatae nihil quidem!'},
    {title: 'How to defeat browser', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aperiam voluptates dolore quos. Ipsam atque, praesentium reiciendis quod error necessitatibus dolorum quo ex a quae aut aspernatur, beatae nihil quidem!'},
  ]

  res.status(200).json(blogs)
}
const createSelection = (req,res) => {
  res.status(200).json({
    status: "success"
  })
}

app.route('/api/vi/courses/selection')
  .get(getSelection)
  .post(createSelection)