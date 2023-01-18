const express = require('express');
// const StudentModel = require('../Models/Student');
const {getStudents,postStudent,deleteStudent} = require('../Controller/StudentController');
const studentRouter = express.Router();


studentRouter.route('/signup')
.get(getStudents)          // to get all students
.post(postStudent)         // create student
.delete(deleteStudent)     // to delete student
module.exports = studentRouter;