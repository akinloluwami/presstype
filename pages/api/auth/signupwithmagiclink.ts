import { allowMethods } from "@/middlewares/allowMethods";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;
  return res.status(200).send(email);
};

export default allowMethods(["POST"])(handler);
