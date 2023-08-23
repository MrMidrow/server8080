
const express = require('express');
const router = express.Router();
const controller = require('./login.controller');

router.post('/', controller.valid);

module.exports = router;
