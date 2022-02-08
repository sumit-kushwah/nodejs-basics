const express = require('express')
const users = require('../data')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Welcome to the word of express js')
})

app.get('/employee', (req, res) => {
    res.send('employee data')
})

app.get("/users", (req, res) => {
    const users = [
        {id: 1, name: 'sumit', age: 12, skill: 'react'},
        {id: 2, name: 'amit', age: 23, skill: 'angular'},
        {id: 3, name: 'aryan', age: 45, skill: 'vue'},
        {id: 4, name: 'aarush', age: 34,  skill: '.net'},
    ]
    res.json(users);
})

app.get("/users-list", (req, res) => {
    res.json(users);
})

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Serve is listening on port: ${PORT}`)
})