process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const express = require('./config/express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, '127.0.0.1');

console.log('temp app running at http://localhost:' + port + '/');
