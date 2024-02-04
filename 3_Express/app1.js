const express = require('express')

const app = express();

app.use(express.json())


let courses = [
    {id : 1, companyName : 'Comviva'},
    {id : 2, companyName : 'Maersk'},
    {id : 3, companyName : 'HighRadius'}
]

app.get('/',(req, res)=>{
    res.send("Home Page")
})

app.get('/about', (req, res)=>{
    res.send("About Page")
})

app.get('/contact', (req, res)=>{
    res.send("Contact Page")
})

app.get('/courses', (req, res)=>{
    res.send(courses)
})

// app.get('/courses/:companyName', (req, res)=>{
//     let course = courses.find(course => course.companyName === req.params.companyName)
//     res.send(course)
// })

app.get('/courses/:id', (req, res)=>{
    let course = courses.find(course => course.id === parseInt(req.params.id))
    res.send(course)
})


app.post('/courses', (req, res)=>{
    const course = {
        id : courses.length + 1,
        companyName : req.body.companyName
    }
    courses.push(course)
    res.send(course)
})




const port = process.env.PORT || 8000 
app.listen(port, ()=>{
    console.log(`Server is Running at port ${port}`)
})