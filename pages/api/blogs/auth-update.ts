import { allowMethods } from "@/middlewares/allowMethods";
import jwt from "jsonwebtoken";
import Blog from "@/schema/Blog";
import { connectToDatabase } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.query;
  if (!email) {
    res.status(400).json({ message: "Email is required" });
    return;
  }
  if (!req.headers.authorization) {
    res.status(401).json({
      message: "Unauthorized request",
    });
    return;
  }
  const token = req.headers.authorization.split(" ")[1];

  const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

  const blog = await Blog.findOne({ email: decoded.email });

  if (!blog) {
    res.status(404).json({ message: "Blog not found" });
    return;
  }

  // const { subdomain, title, about } = req.body;
};

export default allowMethods(["POST"])(handler);
