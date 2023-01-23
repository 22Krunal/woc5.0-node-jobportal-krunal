const express = require('express');
// const StudentModel = require('../Models/Student');
const {getStudents,postStudent,deleteStudent,loginStudent} = require('../Controller/StudentController');
const studentRouter = express.Router();
const {encryption} = require('../middleware/hasing');

studentRouter.route('/')
.get(getStudents)          // to get all students
.delete(deleteStudent)     // to delete student

studentRouter.route('/signup')
.post(encryption,postStudent)         // create student

studentRouter.route('/login')
.post(loginStudent);       // login student
module.exports = studentRouter;