const express = require('express');
// const StudentModel = require('../Models/Student');
const {getStudent,postStudent,deleteStudent,loginStudent,updateStudent,updatePassword} = require('../Controller/StudentController');
const fetchuser = require('../middleware/fetchuser');
const studentRouter = express.Router();
const {encryption} = require('../middleware/hasing');

studentRouter.route('/')
.get(fetchuser,getStudent)          // to get all students
.delete(deleteStudent)     // to delete student

studentRouter.route('/signup')
.post(encryption,postStudent)         // create student

studentRouter.route('/login')
.post(loginStudent);       // login student


studentRouter.route('/password')
.put(fetchuser,encryption,updatePassword);               // to change password;

studentRouter.route('/:id')
.put(updateStudent)           // update student
.delete(fetchuser,deleteStudent);       // Delete student 

module.exports = studentRouter;