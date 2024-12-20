import mongoose from "mongoose";
const { Schema, model } = mongoose;
const attendanceSchema = new Schema(
  {
    name: { type: String, min:10,max:50,required: true },
    email: { type: String, min:30, max:50, required: true, unique: true },
    evenId: { type:  mongoose.Schema.Types.ObjectId,ref:'Event'},
    createBy:{type: mongoose.Schema.Types.ObjectId,ref:'user'},
    updateBy:{type:mongoose.Schema.Types.ObjectId,ref:'user'}
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }

);


const attendance = model("newattendance", attendanceSchema);
export default attendance;

