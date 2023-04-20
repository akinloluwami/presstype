import { Schema, model, models } from "mongoose";

const blogSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  domain: {
    type: String,
    unique: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  posts_imported_from: {
    type: String,
    default: "",
  },
  is_onboarding_complete: {
    type: Boolean,
    default: false,
  },
});

const Blog = models.Blog || model("Blog", blogSchema);

export default Blog;
