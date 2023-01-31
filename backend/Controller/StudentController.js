const StudentModel = require('../Models/Student');
const bcrypt = require('bcrypt');
const {authtokenfun} = require('../middleware/token');

module.exports.getStudents = async function getStudents(req,res){
    let data = await StudentModel.find();
    console.log(data);
    res.send('hello students');
    res.end();
}
module.exports.getStudent = async function getStudent(req,res){
    let data = await StudentModel.findById(req.user.id);
    console.log(data);
    if(data){
        res.json({success:true,data});
    }
    else{
        res.json({success:false});
    }
}
module.exports.postStudent = async function postStudent(req,res){
    let pdata = req.body
    // console.log(pdata);
    try{

        let data = await StudentModel.create({
            FirstName:pdata.FirstName,
            MiddleName:pdata.MiddleName,
            LastName:pdata.LastName,
            Id:pdata.Id,
            Contact:pdata.Contact,
            Address:pdata.Address,
            Batch:pdata.Batch,
            SPI:pdata.Spi,
            email : pdata.Email,
            password : pdata.Password
            // {,MiddleName,LastName,email,contact,Id,address,batch,spi}
        })
        // console.log(data);
        const dataP = {
            user : {
                id : data.id
            }
        }
        const authtoken = authtokenfun(dataP);
        
        if(data){
            res.status(200).json({success:true,message:"Student is Registered Successfully!!",authtoken});
        }
        else{
            res.status(401).json({success:false,message:"Student is Registered Successfully!!"})     
        }
    }
    catch(error){
        res.status(500).json({success:false,message:"Internal Server Error"});
    }
    // res.end();
}

module.exports.deleteStudent = async function deleteStudent (req,res){
    let data = req.body;
    let result = await StudentModel.findOneAndRemove({email:data.Email});
    res.json({suceess:true,result,message:"User deleted successfully!!!"});
}

module.exports.loginStudent = async function loginStudent (req,res){
    let data = req.body;
    try{
        let result = await StudentModel.findOne({email:data.Email});
        if(result){
            const flag = await bcrypt.compare(data.Password,result.password);
            if(flag){
                const authtoken = authtokenfun(result);
                res.status(200).json({success:true,message : "Successfully Logged in",authtoken});
            }
            else{
                res.status(401).json({success:false,message : "Password dosen't match"});
            }
        }
        else{
            res.stauts(404).json({success:false,message:"Email is not registered"});
        }
    }
    catch(error){
        res.status(500).json({success:false,message:"Internal Server Error"});
    }
}