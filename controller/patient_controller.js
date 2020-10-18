const Patient = require('../models/patient');
const jwt = require('jsonwebtoken');

module.exports.create = function(req, res){
    Patient.findOne({phone: req.body.phone}, function(err, patient){
        if (!patient){
            Patient.create(req.body, function(err, user){
                if (err){ 
                    return res.json(409, {
                        message: 'Error in creating user'
                    });
                }else{
                    return res.json(200, {
                        message: "Patient Registered",
                        info: {
                            name: user.name,
                            phone: user.phone
                        }
                    })
                }
            })
        }
    })
}

