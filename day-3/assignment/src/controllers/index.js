const url = require("url");
const path = require("path");
const fs = require("fs");
const {
  checkIntNum,
  checkString,
  getStrToNum,
  getStrToSymbols,
  getStrToStr,
} = require("../utils/validation");

const generateRandomNumber = (req, res) => {
  const {
    query: { start, end },
  } = url.parse(req.url, true);

  try {
    if (!checkIntNum(start) || !checkIntNum(end)) {
      throw new Error("invalid start or end time");
    }

    const rand = Math.floor(Math.random() * (end - start) + start);

    res.write(` random value is ${rand}`);
  } catch (error) {
    res.write(error.message);
  } finally {
    res.end();
  }
};
const generatePerson = (req, res) => {
  const { query } = url.parse(req.url, true);

  try {
    const data = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "../fakedata.json"), "utf-8")
    );
    const rand = Math.floor(Math.random() * 50);

    const createFakePerson = {
      firstName: data[rand].name.first,
      lastName: data[rand].name.last,
      email: data[rand].email,
      phone: data[rand].phone,
      address: data[rand].location.state,
      gender: data[rand].gender,
      age: data[rand].dob.age,
      avatar: data[rand].picture.large,
    };

    let newFakePerson = {};

    Object.keys(query).forEach((key1) => {
      if (Object.keys(createFakePerson).includes(key1)) {
        newFakePerson[key1] = createFakePerson[key1];
      }
    });

    res.write(`fake person is ${JSON.stringify(newFakePerson)}`);
  } catch (error) {
    res.write(error.message);
  } finally {
    res.end();
  }
};
const stringInfo = (req, res) => {
  const {
    query: { string },
  } = url.parse(req.url, true);

  try {
    if (!typeof string === "string") {
      throw new Error("invalid string");
    }

    const stringTotalNumber = getStrToNum(string).length;
    const stringTotalString = getStrToStr(string).length;
    const stringTotalSymbols = getStrToSymbols(string);

    res.write(
      JSON.stringify({
        number: stringTotalNumber,
        string: stringTotalString,
        symbols: stringTotalSymbols,
      })
    );
  } catch (error) {
    res.write(error.message);
  } finally {
    res.end();
  }
};

const errorRoute = (req, res) => {
  res.write("not found this page");
  res.end();
};

module.exports = {
  generateRandomNumber,
  generatePerson,
  stringInfo,
  errorRoute,
};
