//Internal Lib Import
const { categoriesType } = require("../../constant/enums/category.enum");
const { Category, Bid, Ticket, Invoice } = require("../../models");
const { notFoundException, badRequestException } = require("../../utils/error");
const { defaults } = require("../../config");

/**
 * Count all article
 * @param {*} param0
 * @returns
 */
const count = ({ search = "" }) => {
  const filter = {
    $or: [
      {
        name: { $regex: search, $options: "i" },
      },
      {
        type: { $regex: search, $options: "i" },
      },
    ],
  };

  return Category.count(filter);
};

/**
 * Create a new category
 * @param {*} param0
 * @returns {Promise<Category>}
 */
const createItem = async ({
  name,
  active = false,
  type = categoriesType.BID,
  userId,
}) => {
  const category = await new Category({
    name,
    active,
    type,
    userId,
  }).save();

  return {
    ...category._doc,
    id: category.id,
  };
};

/**
 * find all categories
 * @param {*} param0
 * @returns {Promise<Category[]>}
 */
const findAll = async (
  userId,
  {
    page = defaults.page,
    limit = defaults.limit,
    sortType = defaults.sortType,
    sortBy = defaults.sortBy,
    search = defaults.search,
    expand = "",
  }
) => {
  expand = expand.split(",").map((item) => item.trim());
  const sortStr = `${sortType === "dsc" ? "-" : ""}${sortBy}`;
  const filter = {
    $and: [
      {
        userId,
      },
      {
        $or: [
          {
            name: { $regex: search, $options: "i" },
          },
          {
            type: { $regex: search, $options: "i" },
          },
        ],
      },
    ],
  };

  const categories = await Category.find(filter)
    .populate({ path: "userId", select: "name" })
    .sort(sortStr)
    .skip(page * limit - limit)
    .limit(limit);

  // if (expand.includes("user")) {
  //   categories.forEach(async (category) => {
  //     await category.populate({
  //       path: "userId",
  //       select: "name",
  //       strictPopulate: false,
  //     });
  //   });
  // }

  return categories.map((category) => ({
    ...category._doc,
    user: category.userId,
    id: category.id,
    userId,
  }));
};

/**
 * find single category
 * @param {*} param0
 * @returns {Promise<Category>}
 */
const findSingle = async ({ userId, id, expand = "" }) => {
  expand = expand.split(",").map((item) => item.trim());
  const category = await Category.findById(id);
  if (!category) {
    throw notFoundException();
  }

  if (category._doc.userId.toString() !== userId) {
    throw notFoundException();
  }

  if (expand.includes("user")) {
    await category.populate({
      path: "userId",
      select: "name",
      strictPopulate: false,
    });
  }
  category._doc.user = category.userId;
  category._doc.userId = category.userId._id;
  return category;
};

/**
 * update a category
 * @param {*} param0
 * @returns {Promise<Category>}
 */
const updateProperties = async (
  id,
  { name, active = false, type = categoriesType.BID },
  userId
) => {
  const category = await Category.findById(id);
  if (!category) {
    throw notFoundException();
  }

  const payload = { name, active, type, userId };

  Object.keys(payload).forEach((key) => {
    category[key] = payload[key] ?? category[key];
  });

  await category.save();
  return { ...category._doc, id: category.id };
};

/**
 * Delete a new category
 * @param {*} param0
 * @returns {Promise<String>}
 */
const removeItem = async (id) => {
  const category = await Category.findById(id);
  if (!category) {
    throw notFoundException();
  }

  const associalBid = await Bid.findOne({ categoryId: id });
  if (associalBid) {
    throw badRequestException("this category associate bid");
  }

  const associalTicket = await Ticket.findOne({ categoryId: id });
  if (associalTicket) {
    throw badRequestException("this category associate ticket");
  }

  const associalInvoice = await Invoice.findOne({ categoryId: id });
  if (associalInvoice) {
    throw badRequestException("this category associate invoice");
  }

  // TODO:
  // Asynchronously Check all associated categories

  return Category.findByIdAndDelete(id);
};

const checkOwnership = async ({ resourceId, userId }) => {
  const category = await Category.findById(resourceId);
  if (!category) throw notFoundException();

  if (category._doc.userId.toString() === userId) {
    return true;
  }
  return false;
};

module.exports = {
  count,
  createItem,
  findAll,
  findSingle,
  updateProperties,
  removeItem,
  checkOwnership,
};
