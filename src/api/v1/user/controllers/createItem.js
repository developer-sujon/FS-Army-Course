//Internal Lib Import
const { userService } = require("../../../../services");
const {
  role: { roleType },
  status: { statusType },
} = require("../../../../constant/enums");
const createItem = async (req, res, next) => {
  const {
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
  } = req.body;
  try {
    const user = await userService.createUser({
      name,
      email,
      password,
      role,
      status,
    });

    const profile = await userService.createProfile({
      userId: user.id,
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

    const response = {
      statusCode: 201,
      message: "user create successful",
      data: {
        user,
        profile,
      },
      links: {
        self: `/users/${user.id}`,
      },
    };
    res.status(201).json(response);
  } catch (e) {
    next(e);
  }
};

module.exports = createItem;
