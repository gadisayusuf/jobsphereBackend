import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const Mongo_URI = process.env.Mongo_URI;

// mongoose
//   .connect(Mongo_URI)
//   .then(() => {
//     console.log("MongoDB connected");
//   })
//   .catch((error) => console.error(error));

export const connectDB = async () => {
  try {
    await mongoose.connect(Mongo_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
