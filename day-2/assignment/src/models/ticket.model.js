//External Lib Import
const shortid = require("shortid");

class TicketModel {
  /**
   * @description ticket model
   * @param {string} userName
   * @param {number} price
   */

  constructor(userName, price) {
    this.ticketID = shortid.generate();
    this.userName = userName;
    this.price = price;
    this.createdAt = Date.now();
    this.updatedAt = Date.now();
  }
}

module.exports = TicketModel;
