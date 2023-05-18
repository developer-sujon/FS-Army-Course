//External Lib Import
require("dotenv").config();
const express = require("express");

//Internal Lib Import
const bookRoute = require("./routes/book.route");
const middilewares = require("./middlewares");
const ApiError = require("./utils/ApiError");
const httpStatus = require("http-status");
const { errorConverter, errorHandler } = require("./middlewares/error");

const app = express();

app.use(middilewares);
app.use(express.json({ limit: "2mb" }));

// parse urlencoded request body
app.use(express.urlencoded({ limit: "5000mb", extended: true }));

app.all("/", (_req, res) => {
  res.json({ message: "direct access not allow" });
});

app.use("/book", bookRoute);

// send back a 404 error for any unknown api request
app.use((_req, _res, next) => {
  next(new ApiError(404, "Not found"));
});

// send back a 404 error for any unknown api request
app.use((_req, _res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, " not found"));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;
