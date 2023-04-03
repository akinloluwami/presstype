import { NextApiRequest, NextApiResponse } from "next";
import Blog from "@/schema/Blog";
import { allowMethods } from "@/middlewares/allowMethods";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const email = req.query.email;

  if (!email) {
    res.status(400).send("Email is required");
    return;
  }
};

export default allowMethods(["GET"])(handler);
