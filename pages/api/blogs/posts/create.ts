import Blog from "@/schema/Blog";
import { NextApiRequest, NextApiResponse } from "next";
import DecodedToken from "@/interfaces/DecodedToken";
import decodeToken from "@/utils/decode_token";
import { allowMethods } from "@/middlewares/allowMethods";
import BlogPost from "@/schema/BlogPost";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
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

  const blog = await Blog.findOne({ email: decoded.email });

  if (!blog) {
    res.status(404).json({ message: "Blog not found" });
    return;
  }

  const { title, content, cover_image } = req.body;

  if (!title) {
    res.status(400).json({ message: "Title is required" });
    return;
  }

  if (title.length < 2) {
    res.status(400).json({ message: "Title must be at least 2 characters" });
    return;
  }

  if (!content) {
    res.status(400).json({ message: "Content is required" });
    return;
  }

  const titleExists = await BlogPost.findOne({ title, blog_id: blog._id });

  if (titleExists) {
    res.status(400).json({ message: "Title already exists" });
    return;
  }

  try {
    await BlogPost.create({
      title,
      content,
      cover_image,
      blog_id: blog._id,
      slug: title.toLowerCase().replace(/ /g, "-"),
    });

    res.status(201).json({ message: "Post created" });
    return;
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
export default allowMethods(["POST"])(handler);
