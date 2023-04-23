import { Schema, model, models } from "mongoose";

const blogPostSchema = new Schema({
  title: {
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
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  blog_id: {
    type: String,
    required: true,
  },
  author_id: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
});

const BlogPost = models.BlogPost || model("BlogPost", blogPostSchema);

export default BlogPost;
