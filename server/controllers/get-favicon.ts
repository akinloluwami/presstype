import type { Request, Response } from "express";
import Blog from "../schema/Blog";

const getFavicon = async (req: Request, res: Response) => {
  const { blog } = req.query;
  try {
    const blogExist = await Blog.findOne({ subdomain: blog });

    if (!blogExist) {
      res.status(404).json({
        message: `${blog} not found`,
      });
      return;
    }

    res.status(200).json({
      favicon: blogExist.blog_logo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export default getFavicon;
