const Patient = require('../models/patient');
const Report = require('../models/report')
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

module.exports.createReport = function(req, res) {
    Patient.findById(req.params.id, function(err, patient){
        if (!patient){
            return res.json(402, {
                message: 'Patient not found'
            })
        }
        console.log(req.params.id);
        console.log(req.user);
    })
}

