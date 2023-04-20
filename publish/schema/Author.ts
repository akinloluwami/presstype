import { Schema, model, models } from "mongoose";

const authorSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  bio: {
    type: String,
  },

  blogs: {
    type: [],
    ref: "Blog",
  },
  avatar: {
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
});

const Author = models.Author || model("Author", authorSchema);

export default Author;
