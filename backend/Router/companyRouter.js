const express = require('express');

const {postCompany,loginCompany,getAllComapines,getMyCompany,updateCompany,deleteCompany} = require('../Controller/CompanyController');
const fetchuser = require('../middleware/fetchuser');
const companyRouter = express.Router();
const {encryption} = require('../middleware/hasing');


companyRouter.route('/signup')
.post(encryption,postCompany);    // company signup

companyRouter.route('/login')
.post(loginCompany);    // company login

companyRouter.route('')
.get(fetchuser,getMyCompany);  //get all compaines details

companyRouter.route('/:id')
.delete(deleteCompany)
.patch(updateCompany);

module.exports = companyRouter;