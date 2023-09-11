//Internal Lib Import
const { User, Profile } = require("../../models");
const {
  role: { roleType },
  status: { statusType },
} = require("../../constant/enums");
const { defaults } = require("../../config");

/**
 * Count all user
 * @param {*} param0
 * @returns
 */
const count = ({ search = "" }) => {
  const filter = {
    name: { $regex: search, $options: "i" },
  };
  return User.count(filter);
};

/**
 * find all tickets
 * @param {*} param0
 * @returns {Promise<{users:User[], profile:Profile[]}>}
 */
const findAll = async ({
  page = defaults.page,
  limit = defaults.limit,
  sortType = defaults.sortType,
  sortBy = defaults.sortBy,
  search = defaults.search,
  expand = "",
}) => {
  expand = expand.split(",").map((item) => item.trim());
  const sortStr = `${sortType === "dsc" ? "-" : ""}${sortBy}`;
  const filter = {
    $or: [
      {
        name: { $regex: search, $options: "i" },
      },
    ],
  };

  const profiles = await Profile.find(filter)
    .populate({ path: "userId", select: "name" })
    .sort(sortStr)
    .skip(page * limit - limit)
    .limit(limit);

  return profiles.map((profile) => ({
    ...profile._doc,
    user: profile.userId,
    id: profile.id,
    userId: profile.userId._id,
  }));
};

/**
 * find single user
 * @param {*} param0
 * @returns {Promise<User>}
 */
const findSingle = async ({ adminId, id, expand = "" }) => {
  expand = expand.split(",").map((item) => item.trim());
  const user = await User.findById(id);
  if (!user) {
    throw notFoundException();
  }

  // if (user._doc.userId.toString() !== userId) {
  //   throw notFoundException();
  // }

  if (expand.includes("profile")) {
    // await user.populate({
    //   path: "userId",
    //   select: "name",
    //   strictPopulate: false,
    // });
  }
  // user._doc.user = user.userId;
  // user._doc.userId = userId;
  return user;
};

/**
 * update a user
 * @param {*} param0
 * @returns {Promise<{users:User, profile:Profile}>}
 */
const updateProperties = async (
  id,
  {
    name,
    email,
    password,
    dateOfBirth,
    gender,
    brief,
    profileImage,
    phone,
    fax,
    address,
    city,
    state,
    zip,
    socialMedia,
    role,
    status,
  }
) => {
  const user = await User.findById(id);
  if (!user) {
    throw notFoundException();
  }

  const payload = {
    name,
    email,
    password,
    dateOfBirth,
    gender,
    brief,
    profileImage,
    phone,
    fax,
    address,
    city,
    state,
    zip,
    socialMedia,
    role,
    status,
  };

  Object.keys(payload).forEach((key) => {
    user[key] = payload[key] ?? user[key];
  });

  await user.save();
  return { ...user._doc, id: user.id };
};

const findUserByEmail = async (email) => {
  const user = await User.findOne({ email });
  return user ? user : false;
};

const userExist = async (email) => {
  const user = await findUserByEmail(email);
  return user ? true : false;
};

const createUser = async ({
  name,
  email,
  password,
  role = roleType.FREELANCER,
  status = statusType.PENDING,
}) => {
  const user = new User({ name, email, password, role, status });
  await user.save();
  return { ...user._doc, id: user.id };
};

const createProfile = async ({
  userId,
  name,
  email,
  password,
  dateOfBirth,
  gender,
  brief,
  profileImage,
  phone,
  fax,
  address,
  city,
  state,
  zip,
  socialMedia,
  role = roleType.FREELANCER,
  status = statusType.PENDING,
}) => {
  const profile = new Profile({
    userId,
    name,
    email,
    password,
    dateOfBirth,
    gender,
    brief,
    profileImage,
    phone,
    fax,
    address,
    city,
    state,
    zip,
    socialMedia,
    role,
    status,
  });
  await profile.save();
  return { ...profile._doc, id: profile.id };
};

module.exports = {
  userExist,
  createUser,
  findUserByEmail,
  createProfile,
  findAll,
  count,
  findSingle,
  updateProperties,
};
