const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const session = require('express-session')

const HomeRoute = require('./routes/homeRoute')
const CourseRoute = require('./routes/courseRoute')

app.use(session({
    secret: 'tes login',
    resave: false,
    saveUninitialized: true
}))

app.locals.user = ''
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))

app.use('/', HomeRoute)

app.use(function(req, res, next){
    if (req.session.user){
        next()
    } else {
        res.redirect('/login')
    }
})

app.use('/course', CourseRoute)

app.listen(port, ()=> {
    console.log(`Listening to Port ${port}`)
})