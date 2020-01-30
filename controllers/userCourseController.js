const Index = require('../models/index')
const UserCourse = Index.UserCourse

class UserCourseController {

    static add(req, res){
        if (req.session){
            let userCourseData = {
                CourseId: req.body.CourseId,
                UserId: req.session.user.id
            }
                UserCourse
                    .create(userCourseData)
                    .then(result => {
                        res.render('courseDetails')
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