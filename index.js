const express = require('express')
const app = express()
const PORT = 7000

app.get('/', (req, res) => {
  res.send('Welcome!..')
})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})