const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()

const logger = require('./logger')
const postRoutes = require('./routes/posts')


const app = express()


app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI)
  .then(result => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.info('error connecting to MongoDB', error.message)
  })

app.get('/', (req, res) => {
  res.send('Welcome!')
})

app.use('/posts', postRoutes)

module.exports = app
