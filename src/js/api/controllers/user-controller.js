const userService = require("../services/user-service");
const authService = require("../services/auth-service");

module.exports = {
  getUser: async (req, res) => {
    const id = req.params.id;
    const user = await userService.getUser(id);
    res.json(user);
  },
  getUsers: async (req, res) => {
    const users = await userService.getUsers();
    res.json(users);
  },
  register: async (req, res) => {
    const { name, password, email } = req.body;
    const user = await authService.registerUser(name, password, email);
    res.json(user);
  },
};
