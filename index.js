require('dotenv').config()
const express = require('express')
const db = require('./db')

const app = express()
const PORT = process.env.PORT | 7000

app.get('/', (req, res) => {
  res.send('Welcome!..')
})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})