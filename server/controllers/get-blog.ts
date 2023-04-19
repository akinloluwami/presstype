import type { Request, Response } from "express";
import Blog from "../schema/Blog";
import BlogPost from "../schema/BlogPost";

const getBlog = async (req: Request, res: Response) => {
  const { blog } = req.query;
  console.log(blog);

  try {
    const blogExist = await Blog.findOne({ subdomain: blog });

    if (!blogExist) {
      res.status(404).json({
        message: `${blog} Blog not found`,
      });
      return;
    }

    const { title, about } = blogExist;

    const blogInfo = { title, about };

    const blogPosts = await BlogPost.find(
      { blog_id: blogExist._id },
      { title: 1, slug: 1, createdAt: 1 }
    ).sort({ _id: -1 });

    res.status(200).json({ blogInfo, blogPosts });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong.",
    });
  }
};

export default getBlog;
