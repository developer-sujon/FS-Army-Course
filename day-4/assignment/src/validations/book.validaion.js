//external lib import
const Joi = require("joi");

const createBook = {
  body: Joi.object().keys({
    author: Joi.string().required(),
    price: Joi.number().required(),
    title: Joi.string().required(),
  }),
};

const findBookById = {
  params: Joi.object().keys({
    bookID: Joi.string().required(),
  }),
};

const updateBookById = {
  params: Joi.object().keys({
    bookID: Joi.string().required(),
  }),
  body: Joi.object().keys({
    author: Joi.string().required(),
    price: Joi.number().required(),
    title: Joi.string().required(),
  }),
};

const deleteBookById = {
  params: Joi.object().keys({
    bookID: Joi.string().required(),
  }),
};

module.exports = {
  createBook,
  findBookById,
  updateBookById,
  deleteBookById,
};
