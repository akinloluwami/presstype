import { Schema, model, models } from "mongoose";

const blogPostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  cover_image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  blog_id: {
    type: String,
    required: true,
  },
});

const BlogPost = models.BlogPost || model("BlogPost", blogPostSchema);

export default BlogPost;
