process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const express = require('./config/express');
const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || '127.0.0.1';

app.listen(port, host);

console.log('temp app running at http://' + host + ':' + port + '/');
