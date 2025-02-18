import express from "express"
const app = express()
app.use(express.json());


import cors from "cors";
app.use(cors({
  origin: "http://localhost:5173", // Allow frontend
  credentials: true // Allow cookies
}));
import cookieParser from "cookie-parser";
app.use(cookieParser()); 


import connectDB from "./config/db.js";
connectDB();

import dotenv from "dotenv";
dotenv.config();


import authRoutes from "./routes/userRoute.js";
app.use("/api/auth", authRoutes);



app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Page Not Found - ${req.originalUrl}`,
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`suds server listening on port ${port}`)
})