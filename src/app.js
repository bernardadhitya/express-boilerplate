import express from 'express';
import indexRoutes from './indexRoutes';
const app = express();

indexRoutes(app);

const server = require('http').Server(app);

export default server;
