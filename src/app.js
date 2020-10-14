import express from 'express';
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

const server = require('http').Server(app);

export default server;
