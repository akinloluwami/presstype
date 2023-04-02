// db.ts
import mongoose from "mongoose";

export async function connectToDatabase() {
  const MONGODB_URI = process.env.MONGODB_URI;
  if (!MONGODB_URI) {
    throw new Error("MongoDB URI not provided.");
  }

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

export async function disconnectFromDatabase() {
  await mongoose.disconnect();
  console.log("Disconnected from MongoDB");
}
