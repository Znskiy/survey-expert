const users = require("./controllers/user-controller");

const routes = [
  { path: "/users/:id", method: "get", func: users.getUser },
  { path: "/users", method: "get", func: users.getUsers },
  { path: "/register", method: "post", func: users.addUser },
];

module.exports = routes;
