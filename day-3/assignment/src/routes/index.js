const {
  generateRandomNumber,
  generatePerson,
  stringInfo,
  errorRoute,
} = require("../controllers");

const routes = {
  "/generateRandomNumber": {
    GET: generateRandomNumber,
  },
  "/generatePerson": {
    POST: generatePerson,
  },
  "/stringInfo": {
    GET: stringInfo,
  },
  errorRoute: errorRoute,
};

module.exports = routes;
