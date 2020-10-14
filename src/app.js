import express from 'express';
import indexRoutes from './indexRoutes';
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

indexRoutes(app);

const server = require('http').Server(app);

export default server;
