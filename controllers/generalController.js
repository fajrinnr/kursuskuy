const Index = require('../models/index')
const User = Index.User

const isAuthorized  = require('./../helpers/isAuthorized');
const sendMail      = require('./../helpers/sendMail');

class GeneralController {

    static registerForm(req, res){
        res.render('registerUser')
    }

    static register(req, res){
        let userData = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        }

        User
            .create(userData)
            .then(result => {
                res.redirect('/login')
            })
            .catch(error => {
                console.log(error)
                res.render('registerUser', { errors : error.errors[0].message})
            })
    }

    static loginForm(req, res){
        let errorMessage = []
        res.render('loginUser', {errors: errorMessage})
    }

    static login(req, res){
        let find = { where: {
            username: req.body.username
            }
        }

        User
            .findOne(find)
            .then(result => {
                if (isAuthorized(req.body.password, result.password)) {     
                    req.session.user = {
                        id: result.id,
                        username: result.username,
                        role: result.role,
                        isLogin: true
                    }
                    req.app.locals.user = req.session.user
                    res.redirect(`/?success=Successfully login.`)  
                }else{
                    let errorMessage = ['Username or Password is wrong.']
                    res.render('loginUser', { errors : errorMessage })    
                }
            })
            .catch(err => {
                let errorMessage = ['Username or Password is wrong.']
                res.render('loginUser', { errors : errorMessage })
            })
    }

    static logout(req, res){
        req.session.destroy(function(err) {
            req.app.locals.user = {}
            res.redirect('/?success=Successfully logout.')
        })
    }

    static sendEmail(req, res) {
        const {fullname, email,message} = req.body;
        sendMail(fullname, email,message)
            .then(sendEmailStatus => {
                res.redirect('/');
            })
            .catch(err => {
                res.send(`Error send email ${err}`);
            })
    }

}

module.exports = GeneralController