// const config = require('./config');
const express = require('express');
const morgan = require('morgan');

module.exports = () => {
  const app = express();

  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

  require('../app/routes/index.server.routes.js')(app);

  app.use(express.static('./public'));

  return app;
};
