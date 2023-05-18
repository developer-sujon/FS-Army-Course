//External Lib Import
const router = require("express").Router();

//Internal Lib Import
const { bookController } = require("../controllers");
const validate = require("../middlewares/validaion");
const { bookValidation } = require("../validations");

router.post(
  "/",
  validate(bookValidation.createBook),
  bookController.createBook
);

router.get("/", bookController.findBook);
router.get(
  "/:bookID",
  validate(bookValidation.findBookById),
  bookController.findBookById
);

router.patch(
  "/:bookID",
  validate(bookValidation.updateBookById),
  bookController.updateBookById
);

router.delete(
  "/:bookID",
  validate(bookValidation.deleteBookById),
  bookController.deleteBookById
);

module.exports = router;
