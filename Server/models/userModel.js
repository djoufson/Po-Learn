const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The name field is required"]
  },
  isTeacher: {
    type: Boolean,
    default: false
  },
  email: {
    type: String,
    required: [true, "The mail address is required"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "The password is required"],
  },
  github: String,
  courses: Array,
  completed: Number,
  cart: Array
})

const User = mongoose.model('User', userSchema)

module.exports = User