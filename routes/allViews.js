const path = require('path');

const express = require('express');

const router = express.Router();

const viewController = require('../controllers/viewcontroller');

router.get('/add',viewController.getAddQuestion);

router.post('/type',viewController.postQuestion);

module.exports = router