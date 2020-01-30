const express = require('express')
const Router = express.Router()

const GeneralController = require('../controllers/generalController')

Router.get('/', (req, res) => {
    res.render('home')
})

Router.get('/login', GeneralController.loginForm)
Router.get('/logout', GeneralController.logout)
Router.get('/register', GeneralController.registerForm)

Router.post('/register', GeneralController.register)
Router.post('/login', GeneralController.login)
Router.post('/contact', GeneralController.sendEmail)



module.exports = Router