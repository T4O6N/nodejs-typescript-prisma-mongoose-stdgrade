import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import exp from "constants";
import { error } from "console";

const prisma = new PrismaClient();

// create Student.
export const createStudnet = async (req: Request, res: Response) => {
  try {
    const { name, lastname, phone } = req.body;
    const student = await prisma.student.create({
      data: {
        name,
        lastname,
        phone,
      },
    });
    res.status(201).json({ student });
  } catch (error) {
    console.log("Error creating student:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// get student.
export const getStudent = async (req: Request, res: Response) => {
  try {
    const students = await prisma.student.findMany({
      include: {
        Classroom: true,
      },
    });
    const allStudent = students.map((students) => ({
      ...students,
    }));
    res.status(200).json({ allStudent });
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// create Teacher.
export const createTeacher = async (req: Request, res: Response) => {
  try {
    const { name, lastname, subject, phone } = req.body;
    const teacher = await prisma.teacher.create({
      data: {
        name,
        lastname,
        subject,
        phone,
      },
    });
    res.status(201).json({ teacher });
  } catch (error) {
    console.log("Error creating teacher:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// get teacher.
export const getTeacher = async (req: Request, res: Response) => {
  try {
    const teachers = await prisma.teacher.findMany({});
    const allTeachers = teachers.map((teachers) => ({
      ...teachers,
    }));
    res.status(200).json({ allTeachers });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// create classroom.
export const createClassroom = async (req: Request, res: Response) => {
  try {
    const { classroomInfo, studentId, teacherId } = req.body;

    // Create the classroom
    const classroom = await prisma.classroom.create({
      data: {
        classroomInfo,
        student: { connect: { id: studentId } },
        teacher: { connect: { id: teacherId } },
      },
    });

    res.status(201).json({ classroom });
  } catch (error) {
    console.error("Error creating classroom:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// get classroom.
export const getClassroom = async (req: Request, res: Response) => {
  try {
    const classrooms = await prisma.classroom.findMany({});
    const allClassroom = classrooms.map((classrooms) => ({
      ...classrooms,
    }));
    res.status(200).json({ allClassroom });
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default {
    // create student.
  createStudnet,
  // get student.
  getStudent,
  // create teacher.
  createTeacher,
  // get teacher.
  getTeacher,
  // create classroom
  createClassroom,
  // get classroom
  getClassroom,
};
