import { Request, Response } from "express"; // imports Express.js libraly
import { PrismaClient } from "@prisma/client"; // Prisma client library

const prisma = new PrismaClient();

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { name, price, userId } = req.body;
    const order = await prisma.order.create({
      data: {
        name,
        price,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
    res.status(201).json({ order });
  } catch (error) {
    console.log("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllorder = async (req: Request, res: Response) => {
  try {
    const orders = await prisma.order.findMany({});
    const allOrder = orders.map((orders) => ({
      ...orders,
    }));
    res.status(200).json({ allOrder });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getOrder = async (req: Request, res: Response) => {
  try {
    const orderId = req.params.orderId;
    const orderOne = await prisma.order.findUnique({
      where: {
        id: orderId,
      },
    });
    if (orderOne) {
      res.status(200).json({ orderOne });
    } else {
      res.status(404).json({ msg: "Order not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export default {
  createOrder,
  getAllorder,
  getOrder,
};
