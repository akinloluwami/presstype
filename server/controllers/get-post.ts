import type { Request, Response } from "express";
import Blog from "../schema/Blog";
import BlogPost from "../schema/BlogPost";

const getBlogPost = async (req: Request, res: Response) => {
  const { blog, slug } = req.query;

  try {
    const blogPage = await Blog.findOne({ subdomain: blog });
    if (!blogPage) return res.status(404).json({ error: "Blog not found" });
    const post = await BlogPost.findOne({
      blog_id: blogPage._id,
      slug: blogPage.slug,
    });

    const { title, content, createdAt, cover_image, slug } = post;

    const postInfo = {
      title,
      content,
      createdAt,
      cover_image,
      slug,
    };

    return res.status(200).json({ post: postInfo });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export default getBlogPost;
