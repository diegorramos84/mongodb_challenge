const Post = require('../models/Post')

const index = async (req, res) => {
  const posts = await Post.find({})
  res.json(posts)
}

const show = async (req, res) => {
  const post = await Post.findById(req.params.id)

  if (post) {
    res.json(post)
  } else {
    res.status(404).end()
  }
}

const create = async (req, res) => {
  const body = req.body

  const post = new Post({
    title: body.title,
    pseudonym: body.pseudonym,
    body: body.body
  })

  const savedPost = await post.save()
  res.status(201).json(savedPost)
}

const destroy = async (req, res) => {
  const post = await Post.findById(req.params.id)

  if (post) {
    await Post.deleteOne(post)
    res.status(204).end()
  } else {
    res.status(404).end()
  }
}

module.exports = {
  create,
  index,
  show,
  destroy
}
