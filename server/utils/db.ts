import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectToDB = mongoose.connect(process.env.MONGODB_URI || "");

connectToDB
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

export default connectToDB;
