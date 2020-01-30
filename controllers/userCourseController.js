const Index = require('../models/index')
const UserCourse = Index.UserCourse
const Course = Index.Course
const CourseContent = Index.CourseContent

class UserCourseController {

    static add(req, res){
        if (req.session){
            let userCourseData = {
                CourseId: req.body.CourseId,
                UserId: req.session.user.id
            }

            let id = req.params.id
                UserCourse
                    .create(userCourseData)
                    .then(result => {
                        return Course.findByPk(id, {include : CourseContent })
                    })
                        .then(result => {
                            // res.send(result)
                            res.render('courseDetails', { userCourse : result })
                        })
                        .catch(error => {
                            res.send(err)
                        })
        } else {
            res.render('loginUser')
        }
    }
}

module.exports = UserCourseController