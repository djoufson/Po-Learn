const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "The title is required"],
    unique: true
  },
  content: {
    type: String,
    required: [true, "The content of a comment is required"]
  },
  authorId: String,
  formationId: String
})

const Comment = mongoose.model("Course", commentSchema)

module.exports = Comment