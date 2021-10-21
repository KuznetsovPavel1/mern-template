import axios from "axios";

import connect from "../config/connect";
const { localhost, portConst } = connect;

export const myAxios = axios.create({
  baseURL: `http://${localhost}:${portConst}/api/`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const isEmpty = (value) =>
  value === undefined ||
  value === null ||
  value === "null" ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0) ||
  (Array.isArray(value) && value.length === 0);
