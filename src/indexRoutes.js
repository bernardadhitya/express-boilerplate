import express from 'express';
import UserRoute from './routes/UserRoute';

const router = express.Router();

const indexRoutes = (app) => {
  app.use('/', router);
  router.use('/users', UserRoute);
}

export default indexRoutes;