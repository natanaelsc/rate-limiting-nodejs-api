const express = require('express');
const apiController = require('../controllers/apiController');
const rateLimiter = require('../middleware/rateLimiter');

const router = express.Router();

router.get('/data', rateLimiter, apiController.getData);

module.exports = router;
