const mongoose = require('mongoose');

const db_link = 'mongodb+srv://admin:wyYTUlFQnm95kQA5@cluster0.9hnfgm9.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(db_link)
.then((db)=>{
    // console.log(db);
    console.log('database connected succefully!!!!');
})
.catch((err)=>{
    console.log(err);
})

const studentSchema = mongoose.Schema({
    FirstName:{
        type : String,
        required : true
    },
    MiddleName:{
        type : String,
        required : true
    },
    LastName:{
        type : String,
        required : true
    },
    Id:{
        type:String,
        unique : true,
        // required : true
    },
    email:{
        type:String,
        unique : true,
        required:true
    },
    Contact:{
        type:String,
        required : true
    },
    Address : {
        type:String,
    },
    Batch:{
      type:String,
      required : true  
    },
    SPI:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    }

});

const StudentModel = mongoose.model('StudentModel',studentSchema);
module.exports = StudentModel;
