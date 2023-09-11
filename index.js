require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const db = require('./db')
const routes = require('./routes/index')

const app = express()

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.get('/v1/api', routes)

const PORT = process.env.PORT | 7000

// app.get('/', (req, res) => {
//   res.send('Welcome!..')
// })

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})