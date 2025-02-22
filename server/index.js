import express from "express"
import Razorpay from "razorpay";
const app = express()
app.use(express.json());

import dotenv from "dotenv";
dotenv.config();


export const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

const client_uri = process.env.CLIENT_URL
import cors from "cors";
app.use(cors({
  origin: client_uri, // Allow frontend
  credentials: true // Allow cookies
}));
import cookieParser from "cookie-parser";
app.use(cookieParser()); 


import connectDB from "./config/db.js";
connectDB();




import authRoutes from "./routes/userRoute.js";
import orderRoutes from "./routes/orderRoute.js"
import paymentsRoutes from "./routes/payment.route.js"
app.use("/api/auth", authRoutes);
app.use("/api/shop", orderRoutes);
app.use("/api/pay", paymentsRoutes);



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