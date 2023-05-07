//External Lib Import
const express = require("express");

//Internal Lib Import
const ticketRoute = require("./routes/ticket.route");

const app = express();

app.use(express.json({ limit: "2mb" }));

// parse urlencoded request body
app.use(express.urlencoded({ limit: "5000mb", extended: true }));

app.all("/", (_req, res) => {
  res.json({ message: "direct access not allow" });
});

app.use("/ticket", ticketRoute);

module.exports = app;
