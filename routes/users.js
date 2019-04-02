const express = require('express');

const router = express.Router();

router.get('/user', (req, res) => {
  res.send('Hello world!!!');
});

router.get('/user', (req, res) => {
  res.send('Hello world!!!');
});

router.get('/singin', (req, res) => {
  res.send('singin');
});

router.get('/singup', (req, res) => {
  res.send('singup');
});

module.exports = router;
