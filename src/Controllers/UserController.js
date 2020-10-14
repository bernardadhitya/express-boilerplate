const fetchUsers = async (req, res) => {
  try {
    res.status(200).send('Hello World!');
  } catch (err) {
    return res.status(500).send(err);
  }
};

export {
  fetchUsers
};