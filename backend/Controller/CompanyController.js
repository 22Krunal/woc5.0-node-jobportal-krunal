const CompanyModel = require('../Models/Company');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET="Krunaliscoolb$oy ";

module.exports.postCompany = async function postCompany (req,res){
    let data = req.body;
    let resp = await CompanyModel.create({
        Name:data.Name,
        Address:data.Address,
        Email:data.Email,
        Password :data.Password,
    })
    console.log(resp);
    const dataP={
        user:{
            id:resp.id
        }
    }
  const authtoken=  jwt.sign(dataP,JWT_SECRET);

    if(resp){
        // localStorage.setItem('CompanyId',result._id.valueOf());
    res.json({success:true,message:"Successfully Registered",authtoken});
    }
    else{
        res.json({success:false,message:"Email is already Registered"}); 
    }
}

module.exports.loginCompany = async function loginCompany(req,res){
    let data = req.body;
    let result = await CompanyModel.findOne({Email:data.Email});
    // console.log(result.Password,data.password);
    if(result){
    const passwordCompare= await bcrypt.compare(data.Password,result.Password);
        if(passwordCompare){
            // localStorage.setItem('CompanyId',result._id.valueOf());
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
    console.log(data);
    res.send("It's working properly");
}

module.exports.deleteCompany = async function deleteCompany(req,res){
    let email = req.body.Email;
    let data = await CompanyModel.findOneAndRemove({Email:Email});
    res.json({success:true,message:"Company is Deleted Successfully"});
}