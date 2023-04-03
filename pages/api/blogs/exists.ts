import { NextApiRequest, NextApiResponse } from "next";
import Blog from "@/schema/Blog";
import { allowMethods } from "@/middlewares/allowMethods";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {};

export default allowMethods(["GET"])(handler);
