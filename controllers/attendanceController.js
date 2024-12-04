import attendance from "../models/attendanceModel.js";

const createAttendance = async(req, res) => {
   try {
    const { name, email, evenId, createBy, updateBy } = req.body;
     
    if (!name || !email || !evenId || !createBy || !updateBy){
      return res.status(400).json({ message: "All required field"});
        
    }
    const attendanceData = new attendance({
        name,
        email,
        evenId,
        createBy,
        updateBy,

    });

    await attendanceData.save();
    res.status(201).json({ message: "attendance create successfully" , attendanceData});
   } catch (error){
    res.status(500).json({ message: "Error create attendance" });
   }
};


const getAllAttendance = async(req, res) => {
  try {
    const attendances = await attendance.find();
    return res.status(200).json({ message: "Get all attendance successfully", attendances});
  }catch(error){
    res.status(500).json({ message: "Error get all attendance" });
  }
};

const getAttendanceId = async(req, res) => {
  try{
    const attendanceId = req.params.id
    const attendanced = await attendance.findById(attendanceId);
    return res.status(200).json({ message: "Get by id successfully", attendanced});
  } catch {
    res.status(500).json({message: "Error get by id "});
  }
};

const updateAttendance = async(req,res) => {
  try {
    const attendanceId = req.params.id;
    const attendanceData = req.body;
    const attendanceUpdate = await attendance.findByIdAndUpdate(
      attendanceId,
      attendanceData,
      { new: true, runValidators: true }
    );
    if(!attendanceUpdate){
      return res.status(404).json({ message: "data not found"});
    }
    return res.status(200).json({ message: "update successfully",attendanceUpdate});

  }catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
}
} 

const deleteAttendance = async(req,res) => {
  try {
    const attendanceId = req.params.id;
    const attendanceDelete = await attendance.findByIdAndDelete(attendanceId);
    return res.status(200).json({message: "Delete successfully", attendanceDelete})
  }catch(error){
    console.log(error);
    return res.status(500).json({ message: "Error delete data" });
  }
}

export default {createAttendance, getAllAttendance, getAttendanceId, updateAttendance, deleteAttendance};

