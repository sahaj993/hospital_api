const express = require('express');
const router = express.Router();

const docController = require('../controller/doctor_controller');

router.post('/create', docController.create);
router.post('/create-session', docController.createSession);

module.exports = router;