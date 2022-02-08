const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
})

const Student = module.exports = mongoose.model('student', studentSchema, 'student')


Student.getStudents = function(cb) {
    Student.find(cb)
}

Student.addStudent = (student, cb) => {
    Student.create(student, cb)
}

Student.getStudent = (id, cb) => {
    Student.findById(id, cb);
}
