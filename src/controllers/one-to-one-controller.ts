import { Request, Response } from "express"; // imports Express.js libraly
import { PrismaClient } from "@prisma/client"; // Prisma client library

const prisma = new PrismaClient(); // used to interact with the database using Prisma's query builder and ORM features.

// One-to-One
// getall
export const getAlluser = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        orders: true,
      },
    });
    const allUser = users.map((user) => ({
      ...user,
    }));
    res.status(200).json({ allUser });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// find user
export const getUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const userOne = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        profile: true,
      },
    });

    if (userOne) {
      res.status(200).json({ userOne });
    } else {
      res.status(404).json({ msg: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// create user
export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, createdBy, updatedBy } = req.body;
    const user = await prisma.user.create({
      data: {
        createdBy,
        updatedBy,
      },
    });
    const profile = await prisma.profile.create({
      data: {
        name,
        userId: user.id,
      },
    });
    res.status(201).json({ profile });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default {
  getAlluser,
  getUser,
  createUser,
};
