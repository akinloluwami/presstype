import mongoose, { Schema, model, models } from "mongoose";

const refreshTokenSchema = new Schema({
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

const RefreshToken =
  models.RefreshToken || model("RefreshToken", refreshTokenSchema);

export default RefreshToken;
