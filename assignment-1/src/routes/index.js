//External Lib Import
const routes = require("express").Router();
const { authController } = require("../api/v1/auth");

//auth routes
routes
  .post("/api/v1/auth/signup", authController.register)
  .post("/api/v1/auth/signin", authController.login);

module.exports = routes;
