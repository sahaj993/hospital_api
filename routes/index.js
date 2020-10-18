const express = require('express');
const router = express.Router();

const homeController = require('../controller/home_controller');

router.get('/', homeController.home);
router.use('/doctors', require('./doctor'));
router.use('/patients', require('./patient'));

module.exports = router;