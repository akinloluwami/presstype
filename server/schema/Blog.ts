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
  blog_logo: {
    type: String,
    default: "",
  },
});

const Blog = models.Blog || model("Blog", blogSchema);

export default Blog;
