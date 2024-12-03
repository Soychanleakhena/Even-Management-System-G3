import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import attendanceRoute from "./routes/attendanceRoute.js";
import eventRoute from "./routes/eventRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/attendance", attendanceRoute);
app.use("/api/event", eventRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on :${PORT}`);
});
