import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import jobRouter from "./routes/jobRoute.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/api/users", userRouter);
app.use("/api/jobs", jobRouter)

app.listen(PORT,()=>{
    console.log(`server Running on port ${PORT}`)
})
