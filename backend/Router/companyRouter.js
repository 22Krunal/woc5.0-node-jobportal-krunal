const express = require('express');

const {postCompany,loginCompany,getAllComapines,getMyCompany,updateCompany,deleteCompany,updatePassword} = require('../Controller/CompanyController');
const fetchuser = require('../middleware/fetchuser');
const companyRouter = express.Router();
const {encryption} = require('../middleware/hasing');


companyRouter.route('/signup')
.post(encryption,postCompany);    // company signup

companyRouter.route('/login')
.post(loginCompany);    // company login

companyRouter.route('')
.get(fetchuser,getMyCompany);  //get all compaines details

companyRouter.route('/password')
.put(fetchuser,encryption,updatePassword);

companyRouter.route('/:id')
.delete(fetchuser,deleteCompany)
.put(updateCompany);

module.exports = companyRouter;