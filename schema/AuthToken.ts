import { Schema, model } from "mongoose";

const authTokenSchema = new Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  timestamp: {
    type: String,
    default: Date.now(),
  },
});

export default model("AuthToken", authTokenSchema);
