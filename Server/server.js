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

// Start listening
console.log(`\nListening on port ${ port } . . .`)
app.listen(port)