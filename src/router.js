const express = require('express')
const router = express.Router()

const { getAllUsers, addUser } = require('./controllers')

router.get('/users', getAllUsers)

router.post('/user', addUser)

module.exports = router
