import Blog from "@/schema/Blog";
import { NextApiRequest, NextApiResponse } from "next";
import { allowMethods } from "next-method-guard";
import DecodedToken from "@/interfaces/DecodedToken";
import decodeToken from "@/utils/decode_token";
import Author from "@/schema/Author";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { fileUrl, blogId } = req.body;

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

  if (!fileUrl) {
    res.status(400).json({
      message: "File Url  is required",
    });
    return;
  }

  if (!blogId) {
    res.status(400).json({
      message: "Blog Id is required",
    });
    return;
  }

  try {
    const blogExists = await Blog.findOne({ _id: blogId });

    if (!blogExists) {
      res.status(404).json({
        message: "Blog not found",
      });
      return;
    }

    const author = await Author.findOne({ email: decoded.email });

    if (!author) {
      res.status(404).json({
        message: "Author not found",
      });
      return;
    }

    const canEdit = author.blogs.find(
      (blog: { toString: () => any }) => blog.toString() === blogId
    );

    if (!canEdit) {
      res.status(401).json({
        message: "Unauthorized request",
      });
      return;
    }

    await Blog.findByIdAndUpdate(blogId, {
      logo: fileUrl,
    });
    res.status(200).json({
      message: "Logo updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
    return;
  }
};

export default allowMethods(["PUT"])(handler);
