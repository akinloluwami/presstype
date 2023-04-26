import Blog from "@/schema/Blog";
import { NextApiRequest, NextApiResponse } from "next";
import DecodedToken from "@/interfaces/DecodedToken";
import decodeToken from "@/utils/decode_token";
import { allowMethods } from "@/middlewares/allowMethods";
import BlogPost from "@/schema/BlogPost";
import { connectToDatabase } from "@/utils/db";
import Author from "@/schema/Author";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  connectToDatabase();
  if (!req.headers.authorization) {
    res.status(401).json({
      message: "Unauthorized request",
    });
    return;
  }
  const token = req.headers.authorization.split(" ")[1];
  const decoded: DecodedToken | null = decodeToken(token as string);

  if (!decoded) {
    res.status(400).json({ message: "Token has expired" });
    return;
  }

  const author = await Author.findOne({ email: decoded.email });

  if (!author) {
    res.status(404).json({ message: "No account associated with this email" });
    return;
  }

  const { title, content, cover_image, blog_id, post_id } = req.body;

  if (!post_id) {
    res.status(400).json({ message: "Post id is required" });
    return;
  }

  if (!title) {
    res.status(400).json({ message: "Title is required" });
    return;
  }

  if (title.length < 2) {
    res.status(400).json({ message: "Title must be at least 2 characters" });
    return;
  }

  if (content.length < 10) {
    res.status(400).json({ message: "Content must be at least 2 characters" });
    return;
  }

  try {
    const postExists = await BlogPost.findById(post_id);

    if (!postExists) {
      res.status(404).json({ message: "Post not found" });
      return;
    }

    const authorBlogs = author.blogs;

    if (!authorBlogs.includes(postExists.blog_id)) {
      res.status(401).json({ message: "Unauthorized request" });
      return;
    }

    await BlogPost.findByIdAndUpdate(post_id, {
      title,
      content,
      cover_image,
      slug: title
        .replace(/[^\w\s]|_/g, "")
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-"),
    });

    res.status(200).json({ message: "Post updated" });
    return;
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
export default allowMethods(["PUT"])(handler);
