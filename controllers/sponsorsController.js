import Sponsors from "../models/sponsors.js";
import mongoose from "mongoose";

const createSponsor = async (req,res)=>{
    try {
        const { name , eventId , createBy ,contribution,updateBy} = req.body;
        if ( ! name || ! eventId || !createBy || !contribution || !updateBy ) {
            return res.status (400).json({
                success : false , 
                massage : "it error"
            });
        }
        const Sponsor = await Sponsors.create ({name , eventId, createBy , contribution ,updateBy});
        res.status(201).json({
            success:true,
            data : Sponsor,
        });   
     } catch (error) {
        res.status(500).json({
            success:false,
            message : error.message,
        });
     }
};
const getAllSponsor = async (req,res)=>{
    try {
        const Sponsor = await Sponsors.find();
        res.status(200).json({ success: true, data: Sponsor });
      } catch (error) {
        res.status(500).json({ success: false, message: error.message });
      }
};
  const getSponsorById = async (req, res) => {
    try {
      const { id } = req.params;
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ success: false, message: 'Invalid ticket ID' });
      }
      const sponsor = await Sponsors.findById(id);
      if (!sponsor) {
        return res.status(404).json({ success: false, message: `Sponsor with ID ${id} not found` });
      }
      res.status(200).json({ success: true, data: sponsor });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
  const updateSponsorById =  async (req,res)=>{
    try{
        const {id} = req.params;
        const {name , contribution,eventId,updateBy} = req.body;
        if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({success:false, message: 'Invalid Sponsor ID'})
    }
    const updateSponsor = await Sponsors.findByIdAndUpdate(
        id,
        {name , contribution,eventId,updateBy},
        {new:true}
    );
    if (!updateSponsor){
        return res.status(404).json ({success:false,message:`Sponsor With ID ${id}`})
    }
    res.status(200).json({success:true,data:updateSponsor});
  } catch (error){
    res.status(500).json({success:false,message:error.message});
  }
};
const deleteSponsorById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(400).json({ success: false, message: 'Invalid ticket ID' });
        }
        const sponsor = await Sponsors.findByIdAndDelete(id);
        if (!sponsor) {
          return res.status(404).json({ success: false, message: `Sponsor with ID ${id} not found` });
        }
        res.status(200).json({ success: true, message: `sponsor with ID ${id} has been deleted` });
      } catch (error) {
        res.status(500).json({ success: false, message: error.message });
      }
};


export default  {createSponsor,getAllSponsor, getSponsorById , updateSponsorById,deleteSponsorById} ;