import Service from "node-windows";

import { __dirname } from "./server";

import logger from "./services/logger";

// Create a new service object
const svc = new Service.Service({
  name: "", //название службы
  script: path.join(__dirname, "server.js"), //путь к скрипту
});

// Listen for the "uninstall" event so we know when it's done.
svc.on("uninstall", function () {
  logger.info("Uninstall complete.");
  logger.info("The service exists: ", svc.exists);
});

// Uninstall the service.
svc.uninstall();
