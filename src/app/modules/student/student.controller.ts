import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const result = await StudentServices.createStudentIntoDB(studentData);
    res.status(200).json({
      success: true,
      message: "created Successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
// get student data from DB
const getStudentData = async (req: Request, res: Response) => {
  try {
    const singleStudentData = await StudentServices.getStudentDataFromDB();
    res.status(200).json({
      success: true,
      message: "Data fetched perfectly",
      data: singleStudentData,
    });
  } catch (error) {
    console.log(error);
  }
};

// get One student data from DB
const getSingleStudentData = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const singleStudentData =
      await StudentServices.getSingleStudentData(studentId);
    res.status(200).json({
      success: true,
      message: "fetched Single perfectly",
      data: singleStudentData,
    });
  } catch (error) {
    console.log(error);
  }
};
export const StudentController = {
  createStudent,
  getStudentData,
  getSingleStudentData,
};
