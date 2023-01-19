const express = require('express');

const {postCompany,loginCompany} = require('../Controller/CompanyController');
const companyRouter = express.Router();

companyRouter.route('/signup')
.post(postCompany);

companyRouter.route('/login')
.post(loginCompany);
module.exports = companyRouter;