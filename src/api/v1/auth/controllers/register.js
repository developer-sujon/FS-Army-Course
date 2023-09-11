//Internal Lib Import
const { authService } = require("../../../../services");

const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const accessToken = await authService.register({
      name,
      email,
      password,
    });

    const response = {
      statusCode: 200,
      message: "Login successful",
      data: {
        access_token: accessToken,
      },
      links: {
        self: req.url,
        signin: req.url.replace("signup", "signin"),
      },
    };

    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

module.exports = register;
