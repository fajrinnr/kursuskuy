const express = require('express')
const Router = express.Router()

Router.get('/', (req, res) => {
    res.render('home')
})

Router.get('/login', (req, res) => {
    res.render('loginUser')
})

Router.get('/register', (req, res) => {
    res.render('registerUser')
})

module.exports = Router