const express = require('express');
const router = express.Router();

const reportController = require('../controller/reports_controller');

router.get('/:status', reportController.getReport);

module.exports = router;