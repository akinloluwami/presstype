import { NextApiRequest, NextApiResponse } from "next";
import { allowMethods } from "next-method-guard";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong.",
    });
  }
};

export default allowMethods(["GET"])(handler);
