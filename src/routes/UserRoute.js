import express from 'express';
import { fetchUsers } from "../controllers/UserController";

const UserRoute = express.Router();

UserRoute.route('/')
  .get(fetchUsers)

export default UserRoute;