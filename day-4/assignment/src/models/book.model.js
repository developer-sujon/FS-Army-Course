//External Lib Import
const shortid = require("shortid");

class BookModel {
  /**
   * @description book model
   * @param {string} author
   * @param {string} title
   * @param {number} price
   */

  constructor(author, price, title) {
    this.bookID = shortid.generate();
    this.author = author;
    this.price = price;
    this.title = title;
    this.createdAt = Date.now();
    this.updatedAt = Date.now();
  }
}

module.exports = BookModel;
