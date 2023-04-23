import { allowMethods } from "next-method-guard";
import Blog from "@/schema/Blog";
import { NextApiRequest, NextApiResponse } from "next";
import DecodedToken from "@/interfaces/DecodedToken";
import decodeToken from "@/utils/decode_token";
import Author from "@/schema/Author";

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
    res.status(400).send("Token expired");
    return;
  }
  try {
    const author = await Author.findOne({ email: decoded.email });

    if (!author) {
      res
        .status(404)
        .json({ message: "No account associated with this email" });
      return;
    }

    const blogs: [] = author.blogs;

    const allBlogs = await Blog.find({ _id: { $in: blogs } });

    res.status(200).json({ blogs: allBlogs });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export default allowMethods(["GET"])(handler);
