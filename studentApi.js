const express = require('express')
const app = express()
const router = express.Router()
const mysql = require('mysql')
const cors = require("cors");

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'secret',
    database: 'studentdb'
}

const con = mysql.createConnection(dbConfig);

con.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected successfully!!')
});

router.get('/', (req, res) => {
    res.json('Welcome to student api - created using sql server db')
})


router.get('/students', (req, res) => {

    con.query("SELECT * FROM student", (err, data) => {
        if (err) {
            throw err;
        }
        res.json(data)
    })
})


router.post('/students', (req, res) => {
    const {name, email, city} = req.body;
    con.query(`INSERT INTO student(name, email, city) values('${name}', '${email}', '${city}')`, (err, data) => {
        if (err) {
            throw err;
        }
        res.json(data);
    })
})

router.put('/students/:id', (req, res) => {
    const id = req.params.id;
    const {name ,email, city} = req.body;
    con.query(`UPDATE student SET name='${name}', email='${email}', city='${city}' WHERE id=${id}`, (err, data) => {
        if (err) {
            throw err;
        }
        res.json(data);
    })
})

router.delete('/students/:id', (req, res) => {
    const id = req.params.id;
    con.query(`DELETE FROM student where id=${id}`, (err, data) => {
        if (err) {
            throw err;
        }
        res.json(data)
    })
})

app.use('/api', router)

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server is listening at port: ${PORT}`)
})



