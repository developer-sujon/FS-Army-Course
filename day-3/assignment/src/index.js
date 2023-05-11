const server = require("./app");

server.listen(6100, (error) => {
  if (error) {
    return console.log("something went wrong listen on port 6100");
  }

  console.log("sever is listen on port 6100");
});
