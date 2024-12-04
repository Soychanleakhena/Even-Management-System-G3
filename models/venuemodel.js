import mongoose from "mongoose";
const {Schema,model}= mongoose;
const venueSchema = new Schema({
    name :{String},
    location:{String},
    capicity:{Number},
    create_by:{type:mongoose.Schema.Types.ObjectID,ref:'user'},
    update_by:{type:mongoose.Schema.Types.ObjectID,ref:'user'} 
},
{
    timestamps:true,
}
);
const venue = model('venue',venueSchema);
export default venue;