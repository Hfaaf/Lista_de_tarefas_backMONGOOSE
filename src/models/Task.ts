import { Schema, model, Document } from "mongoose";

export interface TaskDocument extends Document {
  title: string;
  description: string;
  done: boolean;
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const TaskSchema = new Schema<TaskDocument>(
  {
    title: { type: String, required: true },
    description: { type: String, default: "" },
    done: { type: Boolean, default: false },
    dueDate: { type: Date },
  },
  {
    timestamps: true
  }
);

TaskSchema.index({ title: "text" });

export const Task = model<TaskDocument>("Task", TaskSchema);
