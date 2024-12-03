import mongoose from "mongoose";

const { Schema, model } = mongoose;
const sponsorsSchema = new Schema ({
        name  : {
          type :  String , require : true ,
        },
        contribution : {
          type:  String , require : true,
        },
        eventId : {
          type : Number 
        },
        createBy : {
            type:  String , require : true,
            type: Schema.Types.ObjectId,ref:'User'
        },
        updateBy : {
            type:  String , require : true,
            type: Schema.Types.ObjectId,ref:'User'
        },
        },
        {
            timestamps: { 
                createdAt: 'Create_At',
                updatedAt: 'updated_At' },
        }
    );
    const Sponsors = model('Sponsors', sponsorsSchema);
    export default  Sponsors;
