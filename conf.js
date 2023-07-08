/** @format */
import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

export const getOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.SECRET_TOKEN,
  },
};

export const corsConfig = {
  method: process.env.CROSS_CONFIG_ACCEPTED_ORIGIN,
  optionsSuccessStatus: 200,
};
