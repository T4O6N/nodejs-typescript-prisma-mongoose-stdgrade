import mongoose, { Document, Schema } from "mongoose";

export interface IStudent {
  name: string;
  score: number;
  grade: string;
}

export interface IStudentModel extends IStudent, Document {}

const StudentSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    score: { type: Number, required: true },
    grade: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IStudentModel>("Student", StudentSchema);
