import express from "express"
const app = express()
app.use(express.json());
import cors from "cors";
app.use(cors());
import authRoutes from "./routes/userRoute.js";
import connectDB from "./config/db.js";
connectDB();

import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 3000;

app.use("/api/auth", authRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`suds server listening on port ${port}`)
})