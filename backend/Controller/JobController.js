const JobModel = require('../Models/Job');

module.exports.postJob = async function postJob(req,res){
    let data = req.body;

    let CompanyId = localStorage.getItem('CompanyId');
    if(CompanyId){
    let resp = await JobModel.create({
        Vacancy :  data.Vacancy,
        Criteria : data.Criteria,
        Description : data.Description,
        CompanyId : CompanyId,
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
    let CompanyId = localStorage.getItem('CompanyId');
    if(CompanyId){
        let data = await JobModel.find({CompanyId:CompanyId});
        res.send({success:true,data});
    }
    else{
        res.json({success:false,message:"Login first"});
    }
}