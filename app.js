const express = require('express')
const app = express()
const port = 3000

const HomeRoute = require('./routes/homeRoute')
const CourseRoute = require('./routes/courseRoute')

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))

app.use('/', HomeRoute)
app.use('/course', CourseRoute)

app.listen(port, ()=> {
    console.log(`Listening to Port ${port}`)
})