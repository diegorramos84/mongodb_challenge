const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A post must have a title"],
    unique: true
  },
  pseudonym: {
    type: String,
    required: [true, "A post needs a pseudonym"]
  },
  body: {
    type:  String,
    required: [true, "You can't have an empty post"]
  }
})

module.exports = mongoose.model('Post', postSchema)
