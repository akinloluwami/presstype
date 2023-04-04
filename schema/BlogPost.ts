import { Schema, model, models } from "mongoose";

const blogPostSchema = new Schema({});

const BlogPost = models.BlogPost || model("BlogPost", blogPostSchema);

export default BlogPost;
