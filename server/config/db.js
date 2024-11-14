import mongoose from "mongoose";

const connectDB = async () => {
    try {
      mongoose
        .connect(process.env.DB_URL)
        .then(() => console.log("db connected"))
        .catch((error) => console.log(error))
    } catch (error) {
      console.log(error);
    }
  };
  
export default connectDB;