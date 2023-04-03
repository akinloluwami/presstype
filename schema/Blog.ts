import { Schema, model } from "mongoose";

const blogSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  isEmailVerified: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  hasExistingBlog: {
    type: Boolean,
    default: false,
  },
  isOnboardingComplete: {
    type: Boolean,
    default: false,
  },
});

export default model("Blog", blogSchema);
