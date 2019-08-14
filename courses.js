const express = require('express');
const app = express.Router();

const courses = [
    {
        id: 1,
        name: 'Course 1'
    },
    {
        id: 2,
        name: 'Course 2'
    },
    {
        id: 3,
        name: 'Course 3'
    }
];


app.get('/api/courses/:id', (req, res)=>{
    const course = courses.find(c=>c.id === parseInt(req.params.id));
    if(!course) {
        res.status(404).send("Course Not Available");
    }
    res.send(course);
})

app.post('/api/courses/:id', (req, res)=>{
    if(!req.body.name || req.body.name.length < 3) {
        res.status(400).send("Name should be atleast 3 characters");
    }
    const course = {
        id: courses.length+1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
})


app.put('/api/courses/:id', (req, res)=>{
    const course = courses.find(c=>c.id === parseInt(req.params.id));
    if(!course) {
        return res.status(404).send("Record Not Found");
    }
    const error = validation(req.body);
    if(error) {
        res.status(400).send("Name should be atleast 3 characters");
    }
    course.name = req.body.name;
    res.send(course);
})

function validation(course) {
    if(course.name.length < 3) {
        return ("Name must be atleast 3 characters in length");
    }
}


app.delete('/api/courses/:id', (req, res)=>{
    const course = courses.find(c=>c.id === parseInt(req.params.id));
    if(!course) {
        res.status(404).send("Record Not found");
        return;
    }
    const index =  courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);
})

module.exports = app;