const CompanyModel = require('../Models/Company');

module.exports.postCompany = async function postCompany (req,res){
    let data = req.body;
    let resp = await CompanyModel.create({
        Name:data.Name,
        Address:data.Address,
        Vacancy:data.Vacancy,
        Criteria:data.Criteria,
        Email:data.Email,
        Password :data.Password,
    })
    console.log(resp);
    if(resp){
        localStorage.setItem('CompanyId',result._id.valueOf());
    res.json({success:true,message:"Successfully Registered"});
    }
    else{
        res.json({success:false,message:"Email is already Registered"}); 
    }
}

module.exports.loginCompany = async function loginCompany(req,res){
    let data = req.body;
    let result = await CompanyModel.findOne({email:data.email});
    // console.log(result,data.password);
    if(result){
        if(result.Password == data.password){
            localStorage.setItem('CompanyId',result._id.valueOf());
            res.json({success:true,message : "Successfully Logged in"});
        }
        else{
            res.json({success:false,message : "Password dosen't match"});
        }
    }
    else{
        res.json({success:false,message:"Email is not registered"});
    }
}

module.exports.getAllComapines = async function getAllComapines(req,res){
    let data = await CompanyModel.find();
    console.log(data[0]._id.valueOf());
    res.send("It's working properly");
}