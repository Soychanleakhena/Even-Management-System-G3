import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import sponsorsRoutes from "./routes/sponsorsRoutes.js";
import userRoutes from './routes/userRoutes.js'

import attendanceRoute from "./routes/attendanceRoute.js";
import venueroute from "./routes/venueRoute.js";

dotenv.config(); 

const app = express();
app.use(express.json());
connectDB();

app.use ('/api/Sponsors',sponsorsRoutes);
app.use('/api/user',userRoutes);

 const PORT = process.env.PORT || 3000;
 
 app.use('/api/attendance', attendanceRoute)
 app.use('/api/venue',venueroute)

 app.listen(PORT, () => {
    console.log(`Server is running on :${PORT}`);
});

