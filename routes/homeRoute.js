const express = require('express')
const Router = express.Router()

const Controller = require('../controllers/generalController')

Router.get('/', (req, res) => {
    res.render('home')
})

Router.get('/login', Controller.loginForm)
Router.get('/logout', Controller.logout)
Router.get('/register', Controller.registerForm)

Router.post('/register', Controller.register)
Router.post('/login', Controller.login)



module.exports = Router