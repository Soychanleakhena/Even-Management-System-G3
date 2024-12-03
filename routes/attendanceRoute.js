import express from "express";
import attendanceController from "../controllers/attendanceController.js";
const {createAttendance, getAllAttendance, getAttendanceId, updateAttendance, deleteAttendance}  = attendanceController;
 const attendanceroute = express.Router();


 attendanceroute.post('/create', createAttendance);
 attendanceroute.get('/getAll', getAllAttendance);
 attendanceroute.get('/:id', getAttendanceId);
 attendanceroute.put('/update/:id', updateAttendance);
 attendanceroute.delete('/delete/:id', deleteAttendance);

export default attendanceroute;