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
        Report.create({
            doctor: req.user.name,
            patient: patient.name,
            status: req.body.status,
            quarantine: req.body.quarantine
        }, function(err, report){
            if (err){
                console.log(err);
                return res.json(402, {
                    message: 'Error in creating the report'
                })
            }else{
                return res.json(200, {
                    message: 'Patient report successfully created',
                    info: {
                        doctor: report.doctor,
                        patient: patient.name,
                        status: report.status,
                        quarantine: report.quarantine
                    }
                })
            }
        })
    })
}

module.exports.getReport = function(req, res){
    Patient.findById(req.params.id,function(err, patient){
        if (err){
            return res.json(402, {
                message: 'Patient ID not found'
            })
        }
        Report.find({patient: patient.name}, function(err, reports){
            if (err){console.log(err); return;}
            console.log(reports.length);
            return res.json(200, {
                info: {
                    reports: reports
                }
            })
        }).sort({datefield:-1})
    })
}

