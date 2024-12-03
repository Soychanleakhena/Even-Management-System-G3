import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import sponsorsRoutes from "./routes/sponsorsRoutes.js";
import userRoutes from './routes/userRoutes.js'
dotenv.config(); 

const app = express();
app.use(express.json());
connectDB();
app.use ('/api/Sponsors',sponsorsRoutes);
app.use('/api/user',userRoutes);

 const PORT = process.env.PORT || 3000;
 app.listen(PORT, () => {
    console.log(`Server is running on :${PORT}`);
});

