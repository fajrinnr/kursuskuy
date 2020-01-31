const express = require('express')
const Router = express.Router()

const CourseController      = require('./../controllers/CourseController');

Router.get('/', CourseController.listCourses);

Router.get('/listCourse', CourseController.listCourseContent);
Router.use((req, res, next) => {
    if (req.session && req.session.user.role == 'admin'){
        next()
    } else {
        res.redirect('/')
    }
})

Router.get('/addDetail/:idCourse', CourseController.addCourseDetail);
Router.get('/addCourse', CourseController.addForm);
Router.post('/saveCourse', CourseController.saveCourse);
Router.post('/saveCourseDetail/:idCourse',CourseController.saveCourseDetail);
Router.get('/saveCourseDetail/:idCourse',CourseController.saveCourseDetail);
Router.get('/edit/:idCourse', CourseController.updateForm)
Router.post('/edit/:idCourse', CourseController.update)
Router.get('/delete/:idCourse', CourseController.delete);

module.exports = Router