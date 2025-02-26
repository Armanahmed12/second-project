import { Student } from "./student.interface";
import StudentModel from "./student.model";

const createStudentIntoDB = async (student: Student) => {
  const res = await StudentModel.create(student);
  return res;
};

// get all the data from DB
const getStudentDataFromDB = async () => {
  const data = await StudentModel.find();
  return data;
};
// get single Data
const getSingleStudentData = async (id: string) => {
  const singleStudentData = await StudentModel.findOne({ id });
  return singleStudentData;
};

export const StudentServices = {
  createStudentIntoDB,
  getStudentDataFromDB,
  getSingleStudentData,
};
