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
    },
})

const Student = module.exports = mongoose.model('student', studentSchema, 'student')

module.exports.getStudents = function(cb) {
    Student.find(cb);
}

module.exports.getStudent = function(id, cb) {
    Student.findById(id, cb);
}

module.exports.addStudent = function(student, cb) {
    Student.create(student, cb);
}

module.exports.addStudents = function(students, cb) {
    Student.insertMany(students, cb);
}

module.exports.updateStudent = function(id, student, cb) {
    Student.updateOne({_id: id}, student, cb);
}

module.exports.deleteStudent = function(id, cb) {
    Student.deleteOne({_id: id}, cb);
}