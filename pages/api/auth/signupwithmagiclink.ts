import { allowMethods } from "@/middlewares/allowMethods";
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
};

export default allowMethods(["POST"])(handler);
