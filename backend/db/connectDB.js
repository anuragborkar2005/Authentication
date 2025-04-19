import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "MERN_AUTHENTICATION",
    });
    console.log("MONGO connected");
  } catch (error) {
    console.log("DB Connection failed");
  }
};
