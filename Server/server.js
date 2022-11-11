const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = require('./app')

console.clear()
dotenv.config({ path: './config.env' })
const port = process.env['PORT']
const dbString = process.env['DATABASE']

mongoose
  .connect(dbString, {
    useNewUrlParser: true
  })
  .then(con => {
    console.log('Connection to the DB successful . . .')
  })
  .catch(e => {
    console.log(e)
  })

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true
  },
  rating: {
    type: Number,
    default: 4.5
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price']
  }
})

const Tour = mongoose.model('Tour', tourSchema)

// const testTour = new Tour({
//   name: "The Park Camper",
//   price: 997
// })

// testTour
//   .save()
//   .then(doc => {
//     console.log(doc)
//   })
//   .catch(err => {
//     console.log(err)
//   })

// Start listening
console.log(`\nListening on port ${ port } . . .`)
app.listen(port)