import Service from "node-windows";

import { __dirname } from "./server";

import logger from "./services/logger";

// Create a new service object
const svc = new Service.Service({
  name: "", //название службы
  description: "", //описание службы
  script: path.join(__dirname, "server.js"), //путь к скрипту
  // scriptOptions: "npm run",
  // nodeOptions: ["--harmony", "--max_old_space_size=4096"],
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on("install", function () {
  svc.start();
  logger.info("Install complete.");
  logger.info("The service exists: ", svc.exists);
});

svc.install();
