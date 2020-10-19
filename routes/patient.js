const express = require('express');
const passport = require('passport')
const router = express.Router();

const patientController = require('../controller/patient_controller');

router.post('/register', passport.authenticate('jwt', {session: true}), patientController.create);
router.post('/:id/create_report',  patientController.createReport);

module.exports = router;