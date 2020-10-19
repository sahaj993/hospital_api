const express = require('express');
const passport = require('passport')
const router = express.Router();

const patientController = require('../controller/patient_controller');

router.post('/register', passport.authenticate('jwt', {session: false}), patientController.create);
// router.post('/register', patientController.create);
router.post('/:id/create_report',passport.authenticate('jwt', {session: false}), patientController.createReport);

module.exports = router;