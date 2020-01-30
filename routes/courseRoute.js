const express = require('express')
const Router = express.Router()

const CourseController      = require('./../controllers/CourseController');
const UserCourseController  = require('../controllers/userCourseController')

Router.get('/', CourseController.listCourses);
// Router.get('/add', CourseController)

Router.post('/add', UserCourseController.add) // Add User Course
Router.get('/addCourse', CourseController.addForm);
Router.post('/saveCourse', CourseController.saveCourse);
Router.get('/addDetail/:idCourse', CourseController.addCourseDetail);

module.exports = Router