const express = require('express');

const {postCompany,loginCompany,getAllComapines} = require('../Controller/CompanyController');
const companyRouter = express.Router();
const {encryption} = require('../middleware/hasing');


companyRouter.route('/signup')
.post(encryption,postCompany);    // company signup

companyRouter.route('/login')
.post(loginCompany);    // company login

companyRouter.route('')
.get(getAllComapines);  //get all compaines details

module.exports = companyRouter;