import mongoose from "mongoose";
const {Schema, model} = mongoose;

const eventModel = new Schema ({
    name:String,
    date:String,
    descrption:String,
    venueldID:{type:mongoose.Types.ObjectId, ref:""},
    organizerldID:{type:mongoose.Types.ObjectId, ref:""},
    createBy:{type:mongoose.Types.ObjectId, ref:""},
    updateBy:{type:mongoose.Types.ObjectId, ref:""},
},
{
    timestamps:true,
});

const Event = model ('Event', eventModel);
export default Event;