import express from "express";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"
import cors from "cors";
const app= express();


const PORT  = process.env.PORT || 9000;
connectDB();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
     res.setHeader("Access-Control-Allow-Credentials","true"),
     res.send("Backend is running")
})

app.use("/api/auth",authRoutes)


app.listen(PORT,()=>{
     console.log(`api is running on ${PORT}`)
})