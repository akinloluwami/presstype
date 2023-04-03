import { allowMethods } from "@/middlewares/allowMethods";
import jwt from "jsonwebtoken";
import Blog from "@/schema/Blog";
import { connectToDatabase } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {};

export default allowMethods(["POST"])(handler);
