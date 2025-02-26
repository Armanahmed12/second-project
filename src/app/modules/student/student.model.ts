import { Schema, model } from "mongoose";
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from "./student.interface";

// userName Schema
const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String, required: true },
  lastName: {
    type: String,
    required: true,
  },
});

// guardian schema field
const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

// LocalGuardianSchema
const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  gender: ["male", "female"],
  dateOfBirth: String,
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNum: { type: String, required: true },
  bloodGroup: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImg: { type: String },
  isActive: ["active", "blocked"],
});

// 3. Create a Model.
const StudentModel = model<Student>("Student", studentSchema);

export default StudentModel;
