const StudentModel = require('../Models/Student');

module.exports.getStudents = async function getStudents(req,res){
    let data = await StudentModel.find();
    console.log(data);
    res.send('hello students');
    res.end();
}
module.exports.postStudent = async function postStudent(req,res){
    let pdata = req.body
    console.log(pdata);
    let data = await StudentModel.create({
        FirstName:pdata.FirstName,
        MiddleName:pdata.MiddleName,
        LastName:pdata.LastName,
        Id:pdata.Id,
        Contact:pdata.contact,
        Address:pdata.address,
        Batch:pdata.batch,
        SPI:pdata.spi,
        email : pdata.email
        // {,MiddleName,LastName,email,contact,Id,address,batch,spi}
    })
    console.log(data);
    res.send('hello students');
    res.end();
}

module.exports.deleteStudent = async function deleteStudent (req,res){
    let data = req.body;
    let result = await StudentModel.findOneAndRemove({email:data.email});
    res.json({message:"User deleted successfully!!!"});
}