const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "The title is required"],
    unique: true
  },
  author: {
    type: String,
    required: [true, "The author is required"]
  },
  price: {
    type: Number,
    required: [true, "The price is required"]
  },
  stars: Number,
  rates: Number,
  updated: {
    type: Date,
    default: Date.now()
  },
  details: String,
  path: String
})

const Course = mongoose.model("Course", courseSchema)

module.exports = Course