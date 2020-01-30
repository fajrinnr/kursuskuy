const express = require('express')
const Router = express.Router()

const Controller = require('../controllers/generalController')

Router.get('/', (req, res) => {
    res.render('home')
})

Router.get('/login', Controller.loginForm)
Router.get('/logout', Controller.logout)

Router.post('/login', Controller.login)


Router.get('/register', (req, res) => {
    res.render('registerUser')
})

module.exports = Router