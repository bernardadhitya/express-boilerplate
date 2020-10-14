import { getUsers } from '../services/UserService';

const fetchUsers = async (req, res) => {
  try {
    const fetchedUsers = await getUsers();
    res.status(200).send(fetchedUsers);
  } catch (err) {
    return res.status(500).send(err);
  }
};

export {
  fetchUsers
};