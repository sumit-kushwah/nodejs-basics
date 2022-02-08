const express = require('express')
const mongoose = require("mongoose")

const app = express()

const cors = require('cors')

const Student = require('./models/studentModel')


mongoose.connect("mongodb://localhost:27017/studentdb", (err) => {
    if (err) {
        throw err;
    } else {
        console.log('Connected to mongodb successfully')
    }
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.send('Welcome to student server')
})

app.get('/students', (req, res) => {
    Student.getStudents((err, data) => {
        if (err) {
            throw err;
        }
        res.json(data)
    })
})

app.get('/students/:id', (req, res) => {
    const id = req.params.id
    Student.getStudent(id,(err, data) => {
        if (err) {
            throw err;
        }
        res.json(data)
    })
})

app.post('/students', (req, res) => {
    const student = req.body;
    Student.addStudent(student, (err, data) => {
        if (err) {
            throw err;
        }
        res.json(data)
    })
})


const PORT = 3001

app.listen(PORT, () => {
    console.log(`Serve is listening on port: ${PORT}`)
})