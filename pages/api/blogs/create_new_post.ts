import Blog from "@/schema/Blog";
import { NextApiRequest, NextApiResponse } from "next";
import DecodedToken from "@/interfaces/DecodedToken";
import decodeToken from "@/utils/decode_token";
import { allowMethods } from "@/middlewares/allowMethods";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {};

export default allowMethods(["POST"])(handler);
