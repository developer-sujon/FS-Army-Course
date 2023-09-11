//Internal Lib Import
const { User } = require("../../models");
const {
  role: { roleType },
  status: { statusType },
} = require("../../constant/enums");

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

module.exports = {
  userExist,
  createUser,
  findUserByEmail,
};
