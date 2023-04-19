import { connectToDatabase } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";
import { allowMethods } from "next-method-guard";
import Blog from "@";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectToDatabase();
    const { blog } = req.query;
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong.",
    });
  }
};

export default allowMethods(["GET"])(handler);
