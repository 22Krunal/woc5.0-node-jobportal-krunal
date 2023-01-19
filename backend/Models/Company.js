const mongoose = require('mongoose');

const CompanySchema =  mongoose.Schema({
    Name:{
        type : String,
        required : true
    },
    Address:{
        type : String,
        required : true
    },
    Vacancy:{
        type : Number,
        required : true
    },
    Criteria:{
        type : Number,
        required : true
    },
    Email:{
        type : String,
        required : true
    },
    Password : {
        type : String,
        required : true
    }
})
const CompanyModel = mongoose.model('ComapanyModel',CompanySchema);
module.exports = CompanyModel;