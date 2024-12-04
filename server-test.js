// import express from(express);
import express from "express";
import mongoose from "mongoose";
mongoose.connect("mongodb+srv://sreypheaphorn:mgh6hZv7HuROIn63@sreyphea.1mrhk.mongodb.net/?retryWrites=true&w=majority&appName=Sreyphea")
import venue from "./models/venuemodel.js";
const app =express();
app.get("/api/venue", (req, res) =>{
    res.send("Get venue")
})

app.listen(3000,()=>{
    console.log("server running")
})






