"use strict";

const Index = require('../models/index')
const Course = Index.Course
const CourseContent = Index.CourseContent

class CourseController {
    static listCourses(req, res) {
        Course
            .findAll({include: [CourseContent]})
            .then(result => {
                // res.send(result)
                res.render('courses/courseList', {courses : result});
            })
            .catch(err => {
                res.send(err)
            })
        
    }

    static addForm(req, res){
        res.render('courses/form');
    }

    static addCourse(req, res){
        
    }

}

module.exports = CourseController;