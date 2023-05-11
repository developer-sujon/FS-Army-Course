const http = require("http");
const url = require("url");

const routes = require("./routes");

const requestHandler = (req, res) => {
  //Parse the address:
  const { pathname } = url.parse(req.url, true);
  const currentRoute = routes[pathname] || routes.errorRoute;
  const currentHandler = currentRoute[req.method] || routes.errorRoute;

  currentHandler(req, res);
};

const server = http.createServer(requestHandler);

module.exports = server;
