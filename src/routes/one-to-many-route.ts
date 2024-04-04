import express from "express";
import controller from "../controllers/one-to-many-controller";

const OrderController = express.Router();

OrderController.post("/create", controller.createOrder);
OrderController.get("/findAll", controller.getAllorder);
OrderController.get("/findOne/:orderId", controller.getOrder);

export = OrderController;
