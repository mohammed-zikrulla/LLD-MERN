//npm i express
const express = require('express')

const app = express();

//built-in express middleware to parse json files easily
app.use(express.json());

// app.get('/', (req, res)=>{
//     res.send('hello from Express')
// })

// app.get('/about', (req, res)=>{
//     res.send('this is the about Page')
// })

// app.get('/contact', (req, res)=>{
//     res.send('this is the contact Page')
// })

const courses = [
    { id: 1, name: "java" },
    { id: 2, name: "javascript" },
    { id: 3, name: "python" }
]

//---GET METHOD----//
// get all courses
app.get('/courses', (req, res) => {
    res.send(courses);
})

// get specific value based on the parameter
app.get('/courses/:id', (req, res) => {
    const course = courses.find(course => course.id === Number.parseInt(req.params.id));
    if (!course) {
        res.status(404);
    }
    res.send(course);

})

//----POST----//

app.post('/courses', (req, res) => {
    const course = {
        id: req.body.id,
        name: req.body.name
    }

    courses.push(course);

    res.send(courses);
})

// ----PUT------//

app.put('/courses/:id', (req, res) => {
    let course = courses.find(course => Number.parseInt(req.params.id) === course.id);
    if (!course) {
        res.status(404).send("cannot update the course")
    }
    course.name = req.body.name;
    res.send(course);
})

// --------Delete--------- //

app.delete('/courses/:id', (req, res) => {
    let course = courses.find(course => Number.parseInt(req.params.id) === course.id);
    if (!course) {
        res.status(404).send("cannot delete the course")
    }
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);
})


app.listen(8005, () => {
    console.log('server started on port 8005');
})