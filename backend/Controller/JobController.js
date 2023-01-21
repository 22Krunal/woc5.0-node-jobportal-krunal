const JobModel = require('../Models/Job');

module.exports.postJob = async function postJob(req,res){
    let data = req.body;

    // let CompanyId = localStorage.getItem('CompanyId');
    if(1){
    let resp = await JobModel.create({
        Vacancy :  data.Vacancy,
        Criteria : data.Criteria,
        Description : data.Description,
        CompanyId : data.CompanyId,
        Package : data.Package,
        Position : data.Position
    })
    res.json({success : true,message : "Successfully Posted a Job"})
}
else{
    res.json({success:false,message:"Login first"});
}
}

module.exports.getJob = async function getJob(req,res){
    // let CompanyId = localStorage.getItem('CompanyId');
    if(1){
        let data = await JobModel.find({CompanyId:req.body.CompanyId});
        res.send({success:true,data});
    }
    else{
        res.json({success:false,message:"Login first"});
    }
}

module.exports.getJobs = async function getJobs(req,res){
    let resp = await JobModel.find({});
    if(resp){
        res.send({success:true,resp});
    }
    else{
        res.send({success:false,resp});
    }
}

module.exports.deleteJob = async function deleteJob(req,res){
    let CompanyId = req.body.CompanyId;
    let data = await JobModel.findOneAndRemove({CompanyId:CompanyId});
    res.send({success:true,message:"Successfully Deleted"});
}