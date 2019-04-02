const express = require('express');

const router = express.Router();

router.get('/user', (req, res) => {
  res.send('Hello world!!!');
});

router.get('/singin', (req, res) => {
  res.render('singin.ejs', {
    file: 'singin',
  });
});

router.get('/singup', (req, res) => {
  res.render('singup.ejs', {
    file: 'singup',
  });
});

module.exports = router;
