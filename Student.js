const express = require('express')
const mongoose = require('mongoose')
const Student = require('./models/studentModel')
const cors = require("cors");

const router = express.Router()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


mongoose.connect('mongodb://localhost:27017/studentdb', (err) => {
    if (err) {
        throw err
    } else {
        console.log('Connected to mongodb successfully.')
    }
})

router.get('/', (req, res) => {
    res.json('this is a student api')
})

router.get('/students', (req, res) => {
    Student.getStudents((err, data) => {
        if (err) {
            throw err;
        }
        return res.json(data);
    })
})

router.get('/students/:id', (req, res) => {
    const id = req.params.id;
    Student.getStudent(id, (err, data) => {
        if (err) {
            throw err;
        }
        return res.json(data);
    })
})

router.post('/students', (req, res) => {
    const student = req.body;
    Student.addStudent(student, (err, data) => {
        if (err) {
            throw err;
        } else {
            res.json(data);
        }
    })
})

router.post('/student-list', (req, res) => {
    const students = req.body;
    Student.addStudent(students, (err, data) => {
        if (err) {
            throw err;
        } else {
            res.json(data);
        }
    })
})

router.put('/students/:id', (req, res) => {
    const id = req.params.id;
    const student = req.body;
    Student.updateStudent(id, student, (err, data) => {
        if (err) {
            throw err;
        }
        res.json(data)
    })
})

router.delete('/students/:id', (req, res) => {
    const id = req.params.id;
    Student.deleteStudent(id, (err, data) => {
        if (err) {
            throw err;
        }
        res.json(data)
    })
})

app.use('/api', router);

const PORT = 3001

app.listen(PORT, () => {
    console.log(`server is listening on port: ${PORT}`)
})
