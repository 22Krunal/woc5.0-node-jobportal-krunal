const ComapanyModel = require('../Models/Company');

module.exports.postCompany = async function postCompany (req,res){
    let data = req.body;
    let resp = await ComapanyModel.create({
        Name:data.Name,
        Address:data.Address,
        Vacancy:data.Vacancy,
        Criteria:data.Criteria,
        Email:data.Email,
        Password :data.Password,
    })
}