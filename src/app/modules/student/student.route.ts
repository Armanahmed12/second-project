import { Router } from "express";
import { StudentController } from "./student.controller";

const router = Router();
router.post("/create-student", StudentController.createStudent);
// get Data
router.get("/", StudentController.getStudentData);
// get one single data
router.get("/:studentId", StudentController.getSingleStudentData);

export const StudentsRoutes = router;
