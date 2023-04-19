import { NextApiRequest, NextApiResponse } from "next";
import { allowMethods } from "next-method-guard";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {};

export default allowMethods(["GET"])(handler);
