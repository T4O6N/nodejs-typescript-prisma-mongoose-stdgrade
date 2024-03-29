import { Request, Response, NextFunction } from "express";
import express from "express";
import config from "config";
import logger from "./utils/logger";
import connect from "./utils/connect";

const port = config.get<number>("port");
const app = express();

app.get("/home", (req: Request, res: Response) => {
  res.status(200).send({ msg: "Hello Welcome Home" });
});

app.listen(port, async () => {
  logger.info(`Server is running on port ${port}`);

  await connect();
});
