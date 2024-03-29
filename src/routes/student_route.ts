import express from "express";
import controller from "../controllers/student_controller";

const studentRouter = express.Router();

studentRouter.post("/create", controller.createStudent);
studentRouter.get("/get", controller.getAllStudent);
studentRouter.get("/get/:stdId", controller.getStudent);
studentRouter.get("/checkgrade", controller.checkGrade);
studentRouter.patch("/update/:stdId", controller.updateStudent);
studentRouter.delete("/delete/:stdId", controller.deleteStudent);

export = studentRouter;
