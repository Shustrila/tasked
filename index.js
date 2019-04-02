// modules
const express = require('express');
const env = require('node-env-file');

const app = express();

// .env
env(`${__dirname}/.env`);

// static
app.use('/', express.static(`${__dirname}/dist`));

// routes
app.use(require('./routes/index'));
app.use(require('./routes/users'));

// errors

app.listen(process.env.PORT, () => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`http://localhost:${process.env.PORT}`);
  }
});
