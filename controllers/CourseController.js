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

    static saveCourse(req, res){
        Course
            .create({
                name: req.body.name,
                price: req.body.price
            })
            .then(resSave => {
                res.redirect(`/course/addDetail/${resSave.id}`);
            })
            .then(err => {
                res.send(err);
            })
    }

    static addCourseDetail(req, res) {
        let idCourse = req.params.idCourse;
        res.render('courses/addDetail', {idCourse});
    }

}

module.exports = CourseController;