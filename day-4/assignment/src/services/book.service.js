const path = require("path");

const { Book } = require("../models");
const { readFile, saveFile } = require("../utils");

const filePath = path.resolve(__dirname, "../data.json");

class BookService {
  constructor() {
    const data = readFile(filePath);
    this.books = data;
  }

  /**
   * @description crate a Book
   * @param {string} author
   * @param {number} price
   * @param {string} title
   * @returns {Book}
   */
  create(author, price, title) {
    const book = new Book(author, price, title);
    this.books.push(book);
    saveFile(filePath, this.books);
    return book;
  }

  /**
   * @description find Books
   * @returns {Book[]}
   */
  find() {
    return this.books;
  }

  /**
   * @description find Book by id
   * @param {string} bookID
   * @returns {Book}
   */
  findById(bookID) {
    const book = this.books.find((book) => book.bookID == bookID);
    return book;
  }

  /**
   * @description update Book by Book id
   * @param {string} bookID
   * @param {{author:string, price:string, title:string }}, updateBody
   * @return {Book}
   */
  updateBookById(bookID, updateBody) {
    const bookIndex = this.books.findIndex((book) => book.bookID === bookID);

    this.books[bookIndex].author =
      updateBody.author ?? this.books[bookIndex].author;
    this.books[bookIndex].price =
      updateBody.price ?? this.books[bookIndex].price;
    this.books[bookIndex].title =
      updateBody.title ?? this.books[bookIndex].title;
    this.books[bookIndex].updatedAt = new Date();

    saveFile(filePath, this.books);

    return this.books[bookIndex];
  }

  /**
   * @description delete Book by id
   * @param {string} bookID
   * @returns {Book}
   */
  deleteBookById(bookID) {
    const bookIndex = this.books.findIndex((book) => book.bookID === bookID);

    if (bookIndex !== -1) {
      this.books.splice(bookIndex, 1);
      return this.books;
    }
    saveFile(filePath, this.books);

    return null;
  }
}

module.exports = new BookService();
