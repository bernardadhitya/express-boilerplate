import express from 'express';
import { fetchUsers } from "../Controllers/UserController";

const UserRoute = express.Router();

UserRoute.route('/')
  .get(fetchUsers)

export default UserRoute;