import { allowMethods } from "@/middlewares/allowMethods";
import jwt from "jsonwebtoken";
import Blog from "@/schema/Blog";
import { connectToDatabase } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";
import DecodedToken from "@/interfaces/decodedToken";
import decodeToken from "@/utils/decode_token";
import dayjs from "dayjs";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.query;
  if (!email) {
    res.status(400).json({ message: "Email is required" });
    return;
  }
  if (!req.headers.authorization) {
    res.status(401).json({
      message: "Unauthorized request",
    });
    return;
  }
  const token = req.headers.authorization.split(" ")[1];

  const decoded: DecodedToken = decodeToken(token as string);

  const now = dayjs();
  const expirationTime = dayjs.unix(decoded.exp);

  if (now.isAfter(expirationTime)) {
    res.status(400).send("Token expired");
    return;
  }
  const blog = await Blog.findOne({ email: decoded.email });

  if (!blog) {
    res.status(404).json({ message: "Blog not found" });
    return;
  }
};

export default allowMethods(["POST"])(handler);
