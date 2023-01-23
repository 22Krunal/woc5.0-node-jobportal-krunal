const express = require('express');
const {getJobs,postJob,deleteJob} = require('../Controller/JobController');
const JobRouter = express.Router();
const fetchuser = require('../middleware/fetchuser');
JobRouter.route('')
.get(getJobs)
.post(fetchuser,postJob)
.delete(deleteJob);

module.exports = JobRouter;