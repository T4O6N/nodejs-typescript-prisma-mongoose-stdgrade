import express from "express";
import controller from "../controllers/many-to-many";

const studentController = express.Router();

studentController.post("/createStudent", controller.createStudnet);
studentController.get("/getStudents", controller.getStudent);
studentController.post("/createTeacher", controller.createTeacher);
studentController.get("/getTeachers", controller.getTeacher);
studentController.post("/createClass", controller.createClassroom);
studentController.get("/getClassroom", controller.getClassroom);

export = studentController;
