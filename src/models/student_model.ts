import mongoose, { Document, mongo, Schema } from "mongoose";

export interface IStudent {
  name: string;
  grade: string;
}

export interface IStudentModel extends IStudent, Document {}

const StudentSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    grade: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IStudentModel>("Student", StudentSchema);
