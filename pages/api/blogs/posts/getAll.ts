import Blog from "@/schema/Blog";
import { NextApiRequest, NextApiResponse } from "next";
import DecodedToken from "@/interfaces/DecodedToken";
import decodeToken from "@/utils/decode_token";
import { allowMethods } from "@/middlewares/allowMethods";
import BlogPost from "@/schema/BlogPost";
import { connectToDatabase } from "@/utils/db";

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

  const blog = await Blog.findOne({ email: decoded.email });

  if (!blog) {
    res.status(404).json({ message: "Blog not found" });
    return;
  }

  const blogPosts = await BlogPost.find({ blog_id: blog._id });

  if (!blogPosts)
    return res.status(404).json({ message: "Blog posts not found" });

  res.status(200).json({ blogPosts });
};

export default allowMethods(["GET"])(handler);
