import { allowMethods } from "@/middlewares/allowMethods";
import Blog from "@/schema/Blog";
import { connectToDatabase } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;
  if (!email) {
    res.status(400).send("Invalid email");
    return;
  }
  if (!validator.isEmail(email)) {
    res.status(400).send("Invalid email");
    return;
  }

  await connectToDatabase();

  const emailExists = await Blog.findOne({ email });

  if (emailExists) {
    res.status(409).send("Email already exists");
    return;
  }
};

export default allowMethods(["POST"])(handler);
