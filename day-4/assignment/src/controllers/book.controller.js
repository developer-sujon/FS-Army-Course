//Internal Lib Import
const { bookService } = require("../services");

exports.createBook = (req, res) => {
  const { author, price, title } = req.body;
  const Book = bookService.create(author, price, title);
  res.json({
    status: true,
    message: "Book create successful",
    data: Book,
  });
};

exports.findBook = (req, res) => {
  const Books = bookService.find();
  res.json({ status: true, data: Books });
};

exports.findBookById = (req, res) => {
  const { bookID } = req.params;
  const book = bookService.findById(bookID);
  res.json({ status: true, data: book });
};

exports.updateBookById = (req, res) => {
  const { bookID } = req.params;
  const updatedBook = bookService.updateBookById(bookID, req.body);
  res.json({
    status: true,
    message: "Book update successful",
    data: updatedBook,
  });
};

exports.deleteBookById = (req, res) => {
  const { bookID } = req.params;
  const deletedBook = bookService.deleteBookById(bookID);
  res.json({
    status: true,
    message: "Book delete successful",
    data: deletedBook,
  });
};
