
exports.getSelection = (req, res) => {
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aperiam voluptates dolore quos. Ipsam atque, praesentium reiciendis quod error necessitatibus dolorum quo ex a quae aut aspernatur, beatae nihil quidem!'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aperiam voluptates dolore quos. Ipsam atque, praesentium reiciendis quod error necessitatibus dolorum quo ex a quae aut aspernatur, beatae nihil quidem!'},
    {title: 'How to defeat browser', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aperiam voluptates dolore quos. Ipsam atque, praesentium reiciendis quod error necessitatibus dolorum quo ex a quae aut aspernatur, beatae nihil quidem!'},
  ]

  res.status(200).json(blogs)
}

exports.getAllCourses = (req, res) => {
  res
    .status(200)
    .json({courses: "Hello"})
}

exports.addCourse = (req, res) => {
  res
    .status(200)
    .json({courses: "Hello"})
}

