const fs = require("fs");

const saveFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data));
  } catch (error) {
    throw new Error(error);
  }
};

const readFile = (filePath) => {
  try {
    const file = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(file);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  saveFile,
  readFile,
};
