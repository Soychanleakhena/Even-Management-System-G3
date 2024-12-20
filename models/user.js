
import mongoose from "mongoose";
const { Schema, model } = mongoose;
const userSchema = new Schema(
{
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role:{type:String,required: true}
},
{ 
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
}
);

const User = model('User',userSchema);
export default User;

