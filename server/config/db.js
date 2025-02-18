import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${process.env.MONGODM_NAME}`);
    console.log(`MongoDB connected successfully!`);
  } catch (error) {
    console.error(`Error mongodb connection: ${error.message}`);
    // process.exit(1);
  }
};

export default connectDB;
