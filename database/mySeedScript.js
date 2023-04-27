const { faker } = require('@faker-js/faker');
const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const Post = require('../models/Post')

const url = process.env.MONGODB_URI

async function seedDB() {
  try {
    const conn = await mongoose.connect(url, { useNewUrlParser: true })
    await conn.connection.db.dropDatabase()

    for (let index = 0; index < 10; index++) {
      const title = faker.hacker.verb()
      const pseudonym = faker.name.fullName()
      const body =  faker.hacker.phrase()

      let newPost = new Post ({
        title: title,
        pseudonym: pseudonym,
        body: body
      })
      console.log(newPost)
      let savedPost = await newPost.save()
      console.log('Database seeded!')
    }
    conn.connection.close()
  } catch (error) {
    console.log(error.message)
  }
}

seedDB()
