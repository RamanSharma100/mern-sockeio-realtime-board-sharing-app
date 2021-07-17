const users = [];

// Join user to chat
const userJoin = (id) => {
  const user = { id };

  users.push(user);
  return user;
};
// User leaves chat
const userLeave = () => {
  return users.splice(0, 1)[0];
};

//get users
const getUsers = () => {
  return users;
};

module.exports = {
  userJoin,
  userLeave,
  getUsers,
};
