import type { Request, Response } from "express";
import Blog from "../schema/Blog";
import BlogPost from "../schema/BlogPost";

const getBlogPost = async (req: Request, res: Response) => {
  const { blog, slug } = req.query;

  try {
  } catch (error) {}
};

export default getBlogPost;
