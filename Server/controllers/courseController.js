const Course = require('../models/course')

exports.getSelection = (req, res) => {
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aperiam voluptates dolore quos. Ipsam atque, praesentium reiciendis quod error necessitatibus dolorum quo ex a quae aut aspernatur, beatae nihil quidem!'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aperiam voluptates dolore quos. Ipsam atque, praesentium reiciendis quod error necessitatibus dolorum quo ex a quae aut aspernatur, beatae nihil quidem!'},
    {title: 'How to defeat browser', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aperiam voluptates dolore quos. Ipsam atque, praesentium reiciendis quod error necessitatibus dolorum quo ex a quae aut aspernatur, beatae nihil quidem!'},
  ]

  res.status(200).json(blogs)
}

exports.getAllCourses = async (req, res) => {
  try{
    const courses = await Course.find()
    res
      .status(200)
      .json({
        status: true,
        results: courses.length,
        data: {
          courses: courses
        }
      })
  }
  catch (err) {
    res
      .status(404)
      .json({
        status: false,
        data: {
          err
        }
      })
  }
}

exports.addCourse = async (req, res) => {
  try{
    const newCourse = await Course.create( req.body )
    res
      .status(200)
      .json({
        status: true,
        data:{
          course: newCourse
        }
      })
  }
  catch(err) {
    res
      .status(400)
      .json({
        status: false,
        message: err
      })
  }
}

exports.updateCourse = async (req, res) => {
  try{
    res
      .status(200)
      .json({
        status: true,
        data: {
          text: "Helle"
        }
      })
  }
  catch(err){
    
  }
}
