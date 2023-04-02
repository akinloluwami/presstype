import { Schema, model } from "mongoose";

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  hasExitingBlog: {
    type: Boolean,
    default: false,
  },
  isOnboardingComplete: {
    type: Boolean,
    default: false,
  },
});

export default model("Blog", blogSchema);
