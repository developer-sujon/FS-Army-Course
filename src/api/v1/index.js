const { categoryControllers } = require("./category");
const { invoiceControllers } = require("./invoice");
const { bidControllers } = require("./bid");
const { ticketControllers } = require("./ticket");
const { userControllers } = require("./user");

module.exports = {
  categoryControllers,
  invoiceControllers,
  bidControllers,
  ticketControllers,
  userControllers,
};
