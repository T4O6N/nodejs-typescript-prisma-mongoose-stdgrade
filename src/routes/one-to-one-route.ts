import express from "express";
import controller from "../controllers/one-to-one-controller";

const UserController = express.Router();

UserController.get("/findAll", controller.getAlluser);
UserController.get("/findOne/:userId", controller.getUser);
UserController.post("/create", controller.createUser);

export = UserController;
