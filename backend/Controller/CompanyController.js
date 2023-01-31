const CompanyModel = require('../Models/Company');
const bcrypt = require('bcrypt');
const { authtokenfun } = require('../middleware/token');


//route 1 : To register Company 'company/signup'
module.exports.postCompany = async function postCompany (req,res){
    let data = req.body;
    try{

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
    const authtoken =  authtokenfun(resp);

    if(resp){
        // localStorage.setItem('CompanyId',result._id.valueOf());
    res.status(200).json({success:true,message:"Successfully Registered",authtoken});
    }
    else{
        res.status(400).json({success:false,message:"Email is already Registered"}); 
    }

    }
    catch(error){
        console.log(error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
}

//route 2 : To login Company 'company/login'

module.exports.loginCompany = async function loginCompany(req,res){
    let data = req.body;
    try{
    let result = await CompanyModel.findOne({Email:data.Email});
    // console.log(result.Password,data.password);
    if(result){
    const passwordCompare= await bcrypt.compare(data.Password,result.Password);
        if(passwordCompare){
            const dataP={
                user:{
                    id:result.id
                }
            }
            const authtoken =  authtokenfun(result);

            // localStorage.setItem('CompanyId',result._id.valueOf());
            res.status(200).json({success:true,message : "Successfully Logged in",authtoken});
        }
        else{
            res.status(401).json({success:false,message : "Password dosen't match"});
        }
    }
    else{
        res.status(404).json({success:false,message:"Email is not registered"});
    }

    }catch(error){
        console.log(error.message);
        res.status(500).json({success:false,message:"Internal Server Error"});
    }
}

//route 3 : To get all companies 
module.exports.getAllComapines = async function getAllComapines(req,res){
    try{
    let data = await CompanyModel.find();
    console.log(data);
    res.stutus(200).json({success:false,message:"It's working properly"});

    }catch(error){
        console.log(error.message);
        res.status(500).json({success:false,message:"Internal Server Error"});
    }
}
//route 4 : To register Company 'company/signup'

module.exports.getMyCompany = async function getMyCompany(req,res){
    let user = req.user.id
    console.log(user);
    try{
    let data = await CompanyModel.findById(user);
    console.log(data);
    res.status(200).json({success:true,data});

    }catch(error){
        console.log(error.message);
        res.status(500).json({success:false,message:"Internal Server Error"});
    }
}
module.exports.deleteCompany = async function deleteCompany(req,res){
    let id = req.params.id;
    try{
    // let email = req.body.Email;
    let data = await CompanyModel.findById(id);
    if(data){
        res.status(200).json({success:true,message:"Company is Deleted Successfully"});
    }
    else{
        res.status(404).json({success:false,message:"Not Found"});
    }

    }catch(error){
        console.log(error.message);
        res.status(500).json({success:false,message:"Internal Server Error"});
    }
}

module.exports.updateCompany = async function updateCompany(req,res){
    try{

    }catch(error){
        console.log(error.message);
        res.status(500).json({success:false,message:"Internal Server Error"});
    }
}