const morgan = require("../config/morgan");

const middilewares = [morgan.successHandler, morgan.errorHandler];

module.exports = middilewares;
