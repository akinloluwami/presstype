import Blog from "@/schema/Blog";
import BlogPost from "@/schema/BlogPost";
import { connectToDatabase } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";
import { allowMethods } from "next-method-guard";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectToDatabase();
    const { blog } = req.query;

    const blogExist = await Blog.findOne({ subdomain: blog });

    if (!blogExist) {
      res.status(404).json({
        message: "Blog not found",
      });
      return;
    }

    const { title, about } = blogExist;

    const blogInfo = { title, about };

    const blogPosts = await BlogPost.find(
      { blog_id: blogExist._id },
      { title: 1, slug: 1 }
    ).sort({ _id: -1 });

    res.status(200).json({ blogInfo, blogPosts });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong.",
    });
  }
};

export default allowMethods(["GET"])(handler);
