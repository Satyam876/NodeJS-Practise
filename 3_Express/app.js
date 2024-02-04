const express = require('express')

const app = express()

app.use(express.json())                                  // app.use is used to acess Middleware so to convert data to json in post method. 

let courses = [
    {id : 1, courseName: "JavaScript"},
    {id : 2, courseName : "Java"},
    {id : 3, courseName : "Python"}
]

app.get('/', (req, res)=>{
    res.send("Hello there ! I am your daddy")
})

app.get('/about', (req, res)=>{
    res.send("Hello again ! your daddy this side welcome to our about page !")
})

app.get('/contact', (req, res)=>{
    res.send("Contact us at iamyourdaddy69@gmail.com")
})


app.get('/courses', (req, res)=>{
    res.send(courses)
})

app.get('/courses/:courseName', (req, res)=>{
    // res.send(req.params)
    // let course = courses.find(course => course.id === parseInt(req.params.id))
    // res.send(course)
    // console.log(course)


    let course = courses.find(course => course.courseName === req.params.courseName)
    
    if(!course){
        res.status(404).send("The course you are looking for doesn't exist !")
    }
    res.send(course)
})







// POST METHOD

app.post('/courses', (req, res)=>{
    const course =
        {
            id : courses.length + 1,
            courseName : req.body.courseName
        }
    courses.push(course)
    res.send(course)
})






// PUT METHOD - To update the existing database

app.put('/courses/:courseName', (req, res)=>{
    let course = courses.find(course => course.courseName === req.params.courseName)

    if(!course){
        res.status(404).send("The Course you are looking for doesn't exist.")
    }

    course.courseName = req.body.courseName
    res.send(course)
})



// DELETE METHOD

// app.delete('/courses/:courseName', (req, res)=>{
//     let updatedCourse = courses.filter(course => course.courseName !== req.params.courseName)
    
//     courses = updatedCourse
//     res.send(updatedCourse)
// })


// Method - 2

app.delete('/courses/:id', (req, res) =>{
    let course = courses.find(course => course.id === parseInt(req.params.id))

    const index = courses.indexOf(course)

    courses.splice(index,1)
    res.send(course)
})





const port = process.env.PORT || 3000


app.listen(port, ()=>{
    console.log(`Server is running at Port ${port}`)
})