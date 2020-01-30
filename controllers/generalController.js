const Index = require('../models/index')
const User = Index.User

class GeneralController {

    static loginForm(req, res){
        let errorMessage = []
        res.render('loginUser', {errors: errorMessage})
    }

    static login(req, res){
        let find = { where: {
            username: req.body.username,
            password: req.body.password
            }
        }
        console.log(find)
        User
            .findOne(find)
            .then(result => {
                req.session.user = {
                username: result.username,
                role: result.role,
                isLogin: true
            }
            req.app.locals.user = req.session.user
            res.redirect(`/?success=Successfully login.`)  
            })
            .catch(err => {
                let errorMessage = ['Username or Password is wrong.']
                res.render('loginUser', { errors : errorMessage })
            })
    }

    static logout(req, res){
        req.session.destroy(function(err) {
            req.app.locals.user.isLogin = false
            res.redirect('/?success=Successfully logout.')
        })
    }

}

module.exports = GeneralController