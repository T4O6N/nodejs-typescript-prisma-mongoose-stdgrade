// import { Request, Response } from "express"; // imports Express.js libraly
// import calculateGrade from "../utils/grade_calculate";
// import { PrismaClient } from "@prisma/client"; // Prisma client library

// const prisma = new PrismaClient(); // used to interact with the database using Prisma's query builder and ORM features.

// // exports a function named
// export const createStudent = async (req: Request, res: Response) => {
//   // Request and Response Parameters
//   try {
//     //to handle errors
//     const { name, score, village, district, province } = req.body; // request body contains JSON data

//     const grade = calculateGrade(score);

//     const informationData = await prisma.information.create({
//       data: {
//         village,
//         district,
//         province,
//       },
//     });

//     // Prisma client (prisma) to create a new student record in the database.
//     const createStudentData = await prisma.student.create({
//       data: {
//         name,
//         score,
//         grade,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//         information: {
//           connect: { id: informationData.id },
//         },
//       },
//       include: {
//         information: true,
//       },
//     });

//     res.status(201).json({ createStudentData });
//   } catch (error) {
//     console.error("Error creating student:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

// // create teacher.
// // export const createTeacher = async (req: Request, res: Response) => {
// //   try {
// //     const { name, lastname, subject, phone } = req.body;

// //     const infoTeacherData = await prisma.teacher.create({
// //       data: {
// //         name,
// //         lastname,
// //         subject,
// //         phone,
// //       },
// //     });
// //     res.status(201).json({ infoTeacherData });
// //   } catch (error) {
// //     console.log("Error creating teacher:", error);
// //     res.status(500).json({ error: "Internal server error" });
// //   }
// // };

// // get all student.
// export const getAllStudents = async (req: Request, res: Response) => {
//   try {
//     const { grade } = req.query; // query parameter from the request.
//     const students = await prisma.student.findMany({
//       include: {
//         information: true,
//       },
//     }); // It awaits the completion of this operation before proceeding.
//     const allStudents = students.map((student) => ({
//       // maps to fetched student records and transforms each student object.
//       ...student,
//       // Grade: calculateGrade(student.score), // new property to calculated based on the student's score.
//     }));
//     // .filter(
//     //   (student) => !grade || student.Grade === grade.toString().toUpperCase() // checks if the grade parameter is not provided or matches the grade.
//     // );
//     res.status(200).json({ allStudents });
//   } catch (error) {
//     console.error("Error fetching students:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

// // find one.
// export const getStudentById = async (req: Request, res: Response) => {
//   try {
//     const stdId = req.params.stdId; // extracts the student ID from the request parameters.
//     const Student = await prisma.student.findUnique({ where: { id: stdId } }); // to fetch a single student record from the database.

//     if (Student) {
//       res.status(200).json({ Student });
//     } else {
//       res.status(404).json({ msg: "Not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

// // find information.
// export const getInformationById = async (req: Request, res: Response) => {
//   try {
//     const infoId = req.params.infoId; // Extract the information ID from the request parameters.
//     const Information = await prisma.information.findUnique({
//       where: { id: infoId },
//       include: {
//         Student: true,
//       },
//     }); // Fetch a single information record from the database.

//     if (Information) {
//       res.status(200).json({ Information });
//     } else {
//       res.status(404).json({ msg: "Information not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

// // check grade.
// export const checkGrade = async (req: Request, res: Response) => {
//   try {
//     const { grade } = req.query;
//     let students;

//     if (grade) {
//       students = await prisma.student.findMany({
//         where: {
//           grade: grade.toString().toUpperCase(),
//         },
//       });
//     } else {
//       students = await prisma.student.findMany();
//     }
//     res.status(200).json({ studentGrade: students });
//   } catch (error) {
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

// // update student.
// export const updateStudent = async (req: Request, res: Response) => {
//   try {
//     const stdId = req.params.stdId;

//     // Find the student by ID
//     const student = await prisma.student.findUnique({
//       where: { id: stdId },
//     });

//     // If student not found, return 404
//     if (!student) {
//       return res.status(404).json({ msg: "Student not found" });
//     }

//     // Update the student with request body
//     const updatedStudent = await prisma.student.update({
//       where: { id: stdId },
//       data: req.body,
//     });

//     // Respond with the updated student
//     res.status(200).json({ studentUpdated: updatedStudent });
//   } catch (error) {
//     // Handle errors
//     console.error("Error updating student:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

// // delete student.
// export const deleteStudent = async (req: Request, res: Response) => {
//   try {
//     const stdId = req.params.stdId;

//     // Delete the student by ID
//     const deletedStudent = await prisma.student.delete({
//       where: { id: stdId },
//     });

//     // If student is deleted, respond with success message
//     if (deletedStudent) {
//       return res.status(201).json({ msg: "Student deleted" });
//     } else {
//       // If student is not found, respond with 404
//       return res.status(404).json({ msg: "Student not found" });
//     }
//   } catch (error) {
//     // Handle errors
//     console.error("Error deleting student:", error);
//     return res.status(500).json({ error: "Internal server error" });
//   }
// };

// // export default function to use in another files.
// export default {
//   // createStudent
//   createStudent,
//   // createTeacher
//   // createTeacher,
//   // createInformation,
//   // test prisma
//   getAllStudents,
//   getStudentById,
//   getInformationById,
//   updateStudent,
//   deleteStudent,
//   checkGrade,
// };
