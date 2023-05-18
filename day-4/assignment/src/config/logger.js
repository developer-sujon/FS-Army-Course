//External Lib Import
const path = require("path");
const fs = require("fs");
const winston = require("winston");
const { createLogger, format, transports } = winston;
const { timestamp, prettyPrint } = format;

//Internal Lib Import
const { getFullYear, getMonth, getDate } = require("../utils/formetDate");
const config = require("./config");

const enumerateErrorFormat = format((info) => {
  if (info instanceof Error) {
    Object.assign(info, { message: info.stack });
  }
  return info;
});

const filePath = () => {
  const LOGS_FOLDER = path.join(__dirname, "../logs/");

  let directory = `${LOGS_FOLDER}\\${getFullYear()}`;

  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }

  directory += `\\${getMonth()}`;

  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }

  directory += `\\${getDate()}`;

  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }

  return directory;
};

const logger = createLogger({
  level: config.env === "development" ? "debug" : "info",
  format: format.combine(
    timestamp(),
    prettyPrint(),
    enumerateErrorFormat(),
    config.env === "development" ? format.colorize() : format.uncolorize(),
    format.splat(),
    format.printf(({ level, message }) => `${level}: ${message}`)
  ),
  transports: [
    new transports.File({
      filename: `${filePath()}/combined.log`,
      level: "info",
    }),
    new transports.File({
      filename: `${filePath()}/combined.log`,
      level: "info",
    }),
    new transports.File({
      filename: `${filePath()}/error.log`,
      level: "error",
    }),
    new transports.Console({
      stderrLevels: ["error"],
    }),
  ],
});

module.exports = logger;
