const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const session = require('express-session')

const HomeRoute   = require('./routes/homeRoute')
const CourseRoute = require('./routes/courseRoute')
const UserCoursRoute = require('./routes/userRoute')

const CourseController      = require('./controllers/CourseController');


// Helpers
const formatMoney = require('./helpers/formatMoney');

app.use(session({
    secret: 'swadikap lew lew',
    resave: false,
    saveUninitialized: true
}))

app.locals.user = {
    isLogin:false
}

app.locals.formatMoney = formatMoney;

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))

app.use('/', HomeRoute)

app.get('/course', CourseController.listCourses);


app.use(function(req, res, next){
    if (req.session.user){
        next()
    } else {
        res.redirect('/login')
    }
})

app.use('/user', UserCoursRoute)
app.use('/course', CourseRoute)

app.listen(port, ()=> {
    console.log(`Listening to Port ${port}`)
})