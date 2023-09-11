//External Lib Import
const routes = require("express").Router();

//Internal Lib Import
const { authController } = require("../api/v1/auth");
const { categoryControllers } = require("../api/v1/category");
const {
  role: { roleType },
} = require("../constant/enums");
const authentication = require("../middlewares/authenticate");
const authorize = require("../middlewares/authorize");
const ownership = require("../middlewares/ownership");

//auth routes
routes
  .post("/api/v1/auth/signup", authController.register)
  .post("/api/v1/auth/signin", authController.login);

//category routes
routes
  .route("/api/v1/categories")
  .get(authentication, authorize([roleType.ADMIN]), categoryControllers.findAll)
  .post(
    authentication,
    authorize([roleType.ADMIN]),
    categoryControllers.createItem
  );
routes
  .route("/api/v1/categories/:id")
  .get(
    authentication,
    authorize([roleType.ADMIN]),
    categoryControllers.findSingle
  )
  .patch(
    authentication,
    authorize([roleType.ADMIN]),
    ownership("Category"),
    categoryControllers.updateProperties
  )
  .delete(
    authentication,
    authorize([roleType.ADMIN]),
    ownership("Category"),
    categoryControllers.removeItem
  );

module.exports = routes;
