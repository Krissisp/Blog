const Users = require('../../schemes/users');

module.exports = async function (nickname, hashPassword) {
  await Users.create({
    nickname,
    password: hashPassword,
  });
};
