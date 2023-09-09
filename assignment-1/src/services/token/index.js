//External Lib Import
const jwt = require("jsonwebtoken");

//Internal Lib Import
const { serverErrorException } = require("../../utils/error");

const generateToken = ({
  payload,
  algorithm = "HS256",
  secret = process.env.ACCESS_TOKEN_SECRET,
  expiresIn = "1h",
}) => {
  try {
    return jwt.sign(payload, secret, {
      algorithm,
      expiresIn,
    });
  } catch (e) {
    console.log("[JWT]", e);
    throw serverErrorException();
  }
};

const decodeToken = ({ token, algorithm = "HS256" }) => {
  try {
    return jwt.decode(token, { algorithms: [algorithm] });
  } catch (e) {
    console.log("[JWT]", e);
    throw serverErrorException();
  }
};

const verifyToken = ({
  token,
  algorithm = "HS256",
  secret = process.env.ACCESS_TOKEN_SECRET,
}) => {
  try {
    return jwt.verify(token, secret, { algorithms: [algorithm] });
  } catch (e) {
    console.log("[JWT]", e);
    throw serverErrorException();
  }
};

module.exports = {
  generateToken,
  decodeToken,
  verifyToken,
};
