const express = require('express');
const router = express.Router();

const TaskedController = require('../modules/controllers/TaskedController');

router.get('/', new TaskedController().index);

module.exports = router;
