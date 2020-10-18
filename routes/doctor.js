const express = require('express');
const router = express.Router();

const docController = require('../controller/doctor_controller');

router.post('/register', docController.create);
router.post('/login', docController.createSession);

module.exports = router;