const express = require('express')
const Router = express.Router()

const UserCourseController  = require('../controllers/userCourseController')


Router.post('/add/:id', UserCourseController.add) // Add User Course

module.exports = Router