const express = require('express');

const {postCompany,loginCompany,getAllComapines,getMyCompany} = require('../Controller/CompanyController');
const fetchuser = require('../middleware/fetchuser');
const companyRouter = express.Router();
const {encryption} = require('../middleware/hasing');


companyRouter.route('/signup')
.post(encryption,postCompany);    // company signup

companyRouter.route('/login')
.post(loginCompany);    // company login

companyRouter.route('')
.get(fetchuser,getMyCompany);  //get all compaines details

module.exports = companyRouter;