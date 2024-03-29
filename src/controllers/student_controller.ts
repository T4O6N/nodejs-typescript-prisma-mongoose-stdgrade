import { Request, Response, NextFunction } from "express";
import Student from "../models/student_model";
import mongoose from "mongoose";

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, grade } = req.body;

  const student = new Student({
    _id: new mongoose.Types.ObjectId(),
    name,
    grade,
  });

  return await student
    .save()
    .then((student) => res.status(201).json({ student }))
    .catch((error) => res.status(500).json({ error }));
};

const getStudent = async (req: Request, res: Response, next: NextFunction) => {
  const stdId = req.params.stdId;

  return await Student.findById(stdId)
    .then((student) =>
      student
        ? res.status(200).json({ student })
        : res.status(404).json({ msg: "Not found" })
    )
    .catch((error) => res.status(500).json({ error }));
};

const getAllStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return await Student.find()
    .then((Student) => res.status(200).json({ Student }))
    .catch((error) => res.status(500).json({ error }));
};

const checkGrade = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { grade } = req.query;
    const query = grade ? { grade: grade.toString().toUpperCase() } : {};
    const students = await Student.find(query);
    res.status(200).send(students);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const stdId = req.params.stdId;

  return await Student.findById(stdId)
    .then((student) => {
      if (student) {
        student.set(req.body);

        return student
          .save()
          .then((student) => res.status(201).json({ student }))
          .catch((error) => res.status(500).json({ error }));
      } else {
        res.status(404).json({ msg: "Not found" });
      }
    })
    .catch((error) => res.status(500).json({ error }));
};

const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const stdId = req.params.stdId;

  return await Student.findByIdAndDelete(stdId)
    .then((student) =>
      student
        ? res.status(201).json({ msg: "deleted" })
        : res.status(404).json({ msg: "Not found" })
    )
    .catch((error) => res.status(500).json({ error }));
};

export default {
  createStudent,
  getStudent,
  getAllStudent,
  checkGrade,
  updateStudent,
  deleteStudent,
};
