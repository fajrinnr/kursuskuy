"use strict";

class CourseController {
    static listCourses(req, res) {
        res.render('courses/');
    }
}

module.exports = CourseController;