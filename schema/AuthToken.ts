import mongoose, { Schema, model, models } from "mongoose";

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

const AuthToken = models.AuthToken || model("AuthToken", authTokenSchema);

export default AuthToken;
