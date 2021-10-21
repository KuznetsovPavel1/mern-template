import winston from "winston";
const { createLogger, format, transports } = winston;

const strTemplate = ({ message, timestamp }) => `${timestamp} | ${message}`;

const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp({
      format: "DD.MM.YYYY HH:mm:ss",
    }),
    format.errors({ stack: true }),
    // format.splat(),
    format.json(),
    format.printf(strTemplate)
  ),
  transports: [
    new transports.File({
      filename: "./logs/errors.log",
      level: "error",
      options: { flags: "w" },
    }),
    new transports.File({
      filename: "./logs/all.log",
      options: { flags: "w" },
    }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new transports.Console({
      format: format.combine(
        format.colorize({ all: true, colors: { info: "blue" } }),
        format.printf(strTemplate)
      ),
    })
  );
}

export default logger;
