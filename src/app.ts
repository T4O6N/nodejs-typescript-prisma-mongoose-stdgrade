import { Request, Response } from "express";
import express from "express";
import { config } from "../config/default";
import logger from "./utils/logger";
import http from "http";
import mongoose from "mongoose";
// import StudentRouter, { route } from "./routes/student_route";
import UserController from "./routes/one-to-one-route";
import OrderController from "./routes/one-to-many-route";
import studentController from "./routes/many-to-many";

const router = express();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

mongoose
  .connect(config.mongo.url, { retryWrites: true, w: "majority" })
  .then(() => {
    logger.info("Connected to MongoDB");
  })
  .catch((err) => {
    logger.error("Unable to connect: ");
    logger.error(err);
  });

router.get("/healthcheck", (req: Request, res: Response) => {
  res.status(200).send({ Hello: "I'm Good" });
});

// One to one
router.use("/user", UserController);
// One to many
// router.use("/student", StudentRouter);
// many to many
router.use("/students", studentController);
//
router.use("/order", OrderController);

http
  .createServer(router)
  .listen(config.server.port, () =>
    logger.info(`Server is running on port ${config.server.port}`)
  );
