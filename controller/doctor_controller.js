const Doctor = require('../models/doctor');
const jwt = require('jsonwebtoken');

module.exports.create = function(req, res){
    Doctor.findOne({email: req.body.email}, function(err, doc){
        if (!doc){
            Doctor.create(req.body, function(err, doc){
                if (err){
                    console.log("Error in creating the doctor",err); 
                    return res.json(409, {
                        message: 'Error in creating doctor'
                    });
                }else{
                    return res.json(200, {
                        message: "Doctor Signed Up",
                        info: {
                            name: doc.name,
                            email: doc.email
                        }
                    })
                }

            })
        }else{
            return res.json(409, {
                message: 'Doctor already exists'
            })
        }
    })
}

module.exports.createSession = async function(req, res){
    try{
        let doc = await Doctor.findOne({email: req.body.email});
        if (!doc || doc.password!=req.body.password){
            return res.json(422, {
                message: "Invalid Username/Password"
            })
        }
        return res.json(200, {
            message: "Sign In successful",
            data: {
                token: jwt.sign(doc.toJSON(), 'hospital', {expiresIn: '100000'})
            }
        })
    }catch(err){
        return res.json(500, {
            message: "Internal Server Error"
        })
    }
    
}