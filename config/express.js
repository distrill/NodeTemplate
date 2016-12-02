/* eslint-disable global-require */

const express = require('express');
const morgan = require('morgan');

module.exports = () => {
  const app = express();

  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

  app.set('view engine', 'ejs');
  app.set('views', `${__dirname}/../src/views`);

  require('./../src/routes/index.routes.js')(app);

  app.use(express.static('./public'));

  return app;
};
