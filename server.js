import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import attendanceRoute from "./routes/attendanceRoute.js";

dotenv.config(); 

const app = express();
app.use(express.json());
connectDB();
 const PORT = process.env.PORT || 3001;
 app.use('/api/attendance', attendanceRoute)
 app.listen(PORT, () => {
    console.log(`Server is running on :${PORT}`);
    });

