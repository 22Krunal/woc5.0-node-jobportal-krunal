const jwt = require('jsonwebtoken');
const JWT_SECRET="Krunaliscoolb$oy ";

module.exports.authtokenfun = function authtokenfun(req){
    // console.log("requesting from token",req);
    const res = {
        user : {
            id : req.id
        }
    }
    return jwt.sign(res,JWT_SECRET);
}