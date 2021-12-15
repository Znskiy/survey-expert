const userService = require("./user-service");
const jwt = require("jsonwebtoken");

const SALT_ROUNDS = 10;

const generatePassword = (plainPassword) =>
  new Promise((resolve, reject) => {
    bcrypt.genSalt(SALT_ROUNDS, function(err, salt) {
      if (err) reject(err);
      else
        bcrypt.hash(plainPassword, salt, function(err, hash) {
          if (err) reject(err);
          else
            resolve({
              hash,
              salt,
            });
        });
    });
  });

//const checkPassword = (plainPassword, hash) => {
//  bcrypt.compare(plainPassword, hash, function(err, result) {
//    // result == false
//  });
//};

const registerUser = async (name, password, email) => {
  const hashed = generatePassword(password);
  const user = await User.create({
    Name: name,
    Password: hashed.hash,
    Email: email,
    Salt: hashed.salt,
  });
  return userService.getUser(user.id);
};

//const getAuthToken = async (email, password) => {
//  const
//}

module.exports = {
  registerUser,
};
