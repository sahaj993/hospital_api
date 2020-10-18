const express = require('express');
const router = express.Router();

const patientController = require('../controller/patient_controller');

router.post('/register', patientController.create);

module.exports = router;