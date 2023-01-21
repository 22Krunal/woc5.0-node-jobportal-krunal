const express = require('express');
const {getJobs,postJob,deleteJob} = require('../Controller/JobController');
const JobRouter = express.Router();

JobRouter.route('')
.get(getJobs)
.post(postJob)
.delete(deleteJob);

module.exports = JobRouter;