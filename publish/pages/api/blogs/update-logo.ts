import { NextApiRequest, NextApiResponse } from "next";
import { allowMethods } from "next-method-guard";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { fileUrl, blogId } = req.body;

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
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
    return;
  }
};

export default allowMethods(["PUT"])(handler);
