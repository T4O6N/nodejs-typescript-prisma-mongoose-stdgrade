import mongoose, { mongo } from "mongoose";
import config from "config";
import logger from "../utils/logger";

async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    logger.info("DB Connected");
  } catch (err) {
    logger.error("Could not connect to db");
    process.exit(1);
  }
}

export default connect;
