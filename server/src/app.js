const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose');
const Post = require('../models/post')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
    res.send(
     {
       message: `Hi ${req.body.email}! You have been registered. Have fun!`
     }
    )
  })

app.get('/posts', (req, res) => {
  res.send(
    [{
      title: "Hello World!",
      description: "Hi there! How are you?"
    }]
  )
})

mongoose.connect('mongodb://localhost:27017/posts')
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback) {
  console.log("Connection Succeeded");
})

app.post('/posts', (req, res) => {
  const db = req.db
  const title = req.body.title
  const description = req.body.description
  const new_post = new Post({
    title,
    description
  })

  new_post.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Post saved successfully!'
    })
  })
})

app.listen(process.env.PORT || 8081)
