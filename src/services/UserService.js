import { findUsers } from '../repositories/UserRepository';

const getUsers = async () => {
  return await findUsers();
}

export {
  getUsers
}