import { NextApiRequest, NextApiResponse } from "next";
import Blog from "@/schema/Blog";
import { allowMethods } from "@/middlewares/allowMethods";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const email = req.query.email;

  if (!email) {
    res.status(400).send("Email is required");
    return;
  }

  try {
    const blog = await Blog.findOne({ email });
    if (!blog) {
      res.status(404).send("Blog not found");
      return;
    }

    res.status(200).send("Blog found");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

export default allowMethods(["GET"])(handler);
