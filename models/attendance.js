import mongoose from "mongoose";
const { Schema, model } = mongoose;
const attendanceSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    evenName: { type: String, required: true },
    create_by:{type: mongoose.Schema.Types.ObjectId,ref:'user'},
    update_by:{type:mongoose.Schema.Types.ObjectId,ref:'user'}
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const attendance = model("attendance", attendanceSchema);
export default attendance;
