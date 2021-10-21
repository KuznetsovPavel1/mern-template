import express from "express";
import http from "http";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

export const __dirname = dirname(fileURLToPath(import.meta.url));

import connect from "./config/connect.js";

import connectDB from "./config/db.js";
import logger from "./services/logger.js";

const app = express();
const { portConst } = connect;

app.use(express.urlencoded({ limit: "50mb", extended: false }));
app.use(express.json({ limit: "50mb" }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

// Use Routes
// app.use("/api/users",users );

// Body parser middleware
app.use(express.static("client/dist"));

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"))
);

const port = process.env.PORT || portConst;

const server = http.createServer(app);

server.listen(port, async () => {
  try {
    logger.info(`Listening on port ${port}`);

    const mongoConnect = await connectDB();

    if (mongoConnect.success) {
    }
  } catch (error) {
    logger.error(`Something went wrong!`, error);
  }
});
