import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import sponsorsRoutes from "./routes/sponsorsRoutes.js";
import userRoutes from './routes/userRoutes.js'

import attendanceRoute from "./routes/attendanceRoute.js";
import eventRoute from "./routes/eventRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
connectDB();

app.use("/api/attendance", attendanceRoute);
app.use("/api/event", eventRoute);
app.use("/api/sponsors", sponsorsRoutes);
app.use("/api/user", userRoutes);


 const PORT = process.env.PORT || 3000;
 app.use('/api/attendance', attendanceRoute)

 app.listen(PORT, () => {
    console.log(`Server is running on :${PORT}`);
});


