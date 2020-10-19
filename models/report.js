const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    doctor: {
        type: String,
        required: true
    },
    patient: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    quarantine: {
        type: String
    }
},{
    timestamps: true
})

const Report = mongoose.model('Report', reportSchema);
module.exports = Report;