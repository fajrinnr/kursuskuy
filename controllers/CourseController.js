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

    static listCourseContent(req, res) {
        Course
        .findAll()
        .then(courses => {
            res.render('courses/listCourseContent', {courses});
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
        Course
            .findByPk(idCourse, {
                include: [CourseContent]
            })
            .then(course => {
                res.render('courses/addDetail', {course});
            })
            .catch(err => {
                res.send(err);
            })
    }

    static saveCourseDetail(req, res) {
        let idCourse = req.params.idCourse;
        CourseContent
            .create({
                content: req.body.content,
                link: req.body.link,
                CourseId: idCourse
            })
            .then(resSaveContent => {
                res.redirect(`/course/addDetail/${idCourse}`);
            })
            .catch(err => {
                res.send(err);
            })
    }

    static delete(req, res) {
        Course.destroy({
            where: {
                id: Number(req.params.idCourse)
            }
        })
        .then(result => {
            res.redirect('/course/listCourse');
        })
        .catch(err => {
            res.send(err);
        })
    }

}

module.exports = CourseController;