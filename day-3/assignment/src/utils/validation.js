const checkIntNum = (num) => num.match(/^-?\d+$/);
const checkString = (str) => typeof str === "string";
const getStrToNum = (str) => str.replace(/[^0-9]/g, "");
const getStrToStr = (str) => str.replace(/[^a-z]/g, "");
const getStrToSymbols = (str) => {
  return str.length - (getStrToNum(str).length + getStrToStr(str).length);
};

const countSpecial = (str) => {
  const punct = "!,;.-?";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (!punct.includes(str[i])) {
      continue;
    }
    count++;
  }
  return count;
};

module.exports = {
  checkIntNum,
  checkString,
  countSpecial,
  getStrToNum,
  getStrToSymbols,
  getStrToStr,
};
