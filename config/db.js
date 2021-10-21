import config from "config";
import mongoose from "mongoose";

import connect from "./connect.js";
const { mongoURI, reconnectDB } = connect;
const user = config.get("user");
const pass = config.get("pass");

import logger from "../services/logger.js";

const connectDB = async () => {
  try {
    logger.info("NODE_ENV: " + config.util.getEnv("NODE_ENV"));

    if (!mongoURI) {
      logger.error("MongoURI is empty!");
      return { success: false };
    }

    const connectOptions = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    };

    if (user && pass) {
      connectOptions.auth = { authSource: "admin" };
      connectOptions.user = user;
      connectOptions.pass = pass;
    }

    await mongoose.connect(mongoURI, connectOptions);

    logger.info("MongoDB Connected...");
    return { success: true };
  } catch (error) {
    logger.error("Connection to DB failed!");

    return setTimeout(() => connectDB(), reconnectDB);
  }
};

export default connectDB;
