const express = require('express')
const Router = express.Router()

const CoursesController = require('./../controllers/CourseController');

Router.get('/' ,CoursesController.listCourses);

module.exports = Router