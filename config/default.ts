import dotenv from "dotenv";

dotenv.config();

// pakard - constant, MONGO_USERNAME - (variable), is a Node.js global object that provides - jut, access to the environment variables.
const MONGO_USERNAME = process.env.MONGO_USERNAME || ""; // This is a logical OR operator
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "";
const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.6k5rwjq.mongodb.net/std_grade`;

const SERVER_PORT = process.env.SERVER_PORT
  ? Number(process.env.SERVER_PORT)
  : 1337; // default port.

export const config = {
  mongo: {
    username: MONGO_USERNAME,
    password: MONGO_PASSWORD,
    url: MONGO_URL,
  },
  server: {
    port: SERVER_PORT,
  },
};