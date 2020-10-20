const Report = require('../models/report');
const jwt = require('jsonwebtoken');

module.exports.getReport = function(req, res){
    Report.find({status: req.params.status}, function(err, reports){
        if (err){console.log(err); return;}
        console.log(reports.length);
        return res.json(200, {
            info: {
                reports: reports
            }
        })
    })
}


