import { allowMethods } from "@/middlewares/allowMethods";
import jwt from "jsonwebtoken";
import Blog from "@/schema/Blog";
import { connectToDatabase } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";
import DecodedToken from "@/interfaces/DecodedToken";
import decodeToken from "@/utils/decode_token";
import dayjs from "dayjs";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
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

  try {
    const { subdomain, title, about } = req.body;
    const blogUpdate = { subdomain, title, about, isOnboardingComplete: true };

    await Blog.updateOne({ email: decoded.email }, blogUpdate);
    res.status(200).json({ message: "Blog updated" });
    return;
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export default allowMethods(["POST"])(handler);
