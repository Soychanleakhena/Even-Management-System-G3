import mongoose from "mongoose";
const { Schema, model } = mongoose;
const venueSchema = new Schema({
    name: { type: String },
    location: { type: String },
    capicity: { type: Number },
    createBy: { type: mongoose.Schema.Types.ObjectID, ref: 'user' },
    updateBy: { type: mongoose.Schema.Types.ObjectID, ref: 'user' }
},
    {
        timestamps: true,
    }
);
const venue = model('venue', venueSchema);
export default venue;