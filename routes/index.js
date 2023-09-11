const express = require('express')
const router = express.Router()
const authroutes = require('./auth')

router.get('/auth',authroutes)

module.exports = router