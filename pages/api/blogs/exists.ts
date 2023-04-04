import { NextApiRequest, NextApiResponse } from "next";
import Blog from "@/schema/Blog";
import { allowMethods } from "@/middlewares/allowMethods";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const email = req.query.email;

  if (!email) {
    res.status(400).json({ message: "Email is required" });
    return;
  }

  try {
    const blog = await Blog.findOne({ email });
    if (!blog) {
      res.status(404).json({ message: "Blog not found" });
      return;
    }

    res.status(200).json({ message: "Blog found" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default allowMethods(["GET"])(handler);
