const express = require('express');
const router = express.Router();

const TaskedController = require('../modules/controllers/TaskedController');
const tasked = new TaskedController();

router.get('/', (req, res) => {
  res.render('index.ejs', {
    file: 'index'
  });
});

module.exports = router;
