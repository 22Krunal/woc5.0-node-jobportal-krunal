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
    try{
        let data = await StudentModel.findById(req.user.id);
        console.log(data);
        if(data){
            res.status(200).json({success:true,message:"Success",data});
        }
        else{
            res.status(404).json({success:false,message:"Not Found"});
        }
    }
    catch(error){
        res.status(500).json({success:false,message:"Internal Server Error"});
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
        
        const authtoken = authtokenfun(data);
        
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
    let id = req.params.id;
    let user = req.user.id;
    // let result = await StudentModel.findOneAndRemove({email:data.Email});
    // res.json({suceess:true,result,message:"User deleted successfully!!!"});
    try{
        let response = await StudentModel.findById(id);
        if(!response){
            res.status(404).json({success:false,message:"Not Found"});
        }
        console.log("this is my profile",response,response.id.toString());
        if(response.id.toString()!=user){
            res.status(401).json({success:false,message:"Not Allowed To Perfrom this Action"});
        }
        let resp = await StudentModel.findByIdAndDelete(id);
        if(resp){
            res.status(200).json({success:true,message:"Deleted Successfully"});
        }
    }
    catch(error){
        res.status(500).json({success:false,message:"Internal Server Error"});
    }
}

module.exports.loginStudent = async function loginStudent (req,res){
    let data = req.body;
    try{
        let result = await StudentModel.findOne({email:data.Email});
        console.log(result);
        if(!result){
            res.stauts(404).json({success:false,message:"Email is not registered"});
        }
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
        
    }
    catch(error){
        res.status(500).json({success:false,message:"Internal Server Error"});
    }
}

module.exports.updateStudent = async function updateStudent(req,res){
    let id = req.params.id;
    console.log("hello lets see what did it go ",id);
    let {FirstName,MiddleName,LastName,Address,Contact,email,SPI,Batch} = req.body; 
    try{
        console.log("response");
        let resp = await StudentModel.findById(id);
        // console.log("res",resp);
        let newData = {FirstName,MiddleName,LastName,Address,Contact,email,SPI,Batch};
        if(resp){
            resp=await StudentModel.findByIdAndUpdate(id,{$set:newData},{new:true});
            if(resp){
                res.status(200).json({success:true,message:"Successfully Updated",resp});
            }
            else{
                res.status(401).json({success:false,message:"Error"});
            }
        }
        else{
            res.status(404).json({success:false,message:"Student Not Found"});
        }
    }
    catch(error){
        res.status(500).json({success:false,message:"Internal Server Error"});
    }

}