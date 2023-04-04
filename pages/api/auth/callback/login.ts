import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/utils/db";
import AuthToken from "@/schema/AuthToken";
import dayjs from "dayjs";
import jwt from "jsonwebtoken";
import Blog from "@/schema/Blog";
import decodeToken from "@/utils/decode_token";
import DecodedToken from "@/interfaces/decodedToken";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { token, email } = req.query;
  await connectToDatabase();

  const authToken = await AuthToken.findOne({ token });

  if (!authToken || authToken.email !== email) {
    res.status(400).send("Invalid token or email");
    return;
  }

  const decoded: DecodedToken = decodeToken(token as string);

  const now = dayjs();
  const expirationTime = dayjs.unix(decoded.exp);

  if (now.isAfter(expirationTime)) {
    res.status(400).send("Token expired");
    return;
  }

  const blog = await Blog.findOne({ email });

  if (!blog) {
    res.status(400).send("Blog not found");
    return;
  }

  if (!blog.isOnboardingComplete) {
    const emailParam = email ? encodeURIComponent(email as string) : "";
    const tokenParam = token ? encodeURIComponent(token as string) : "";
    res.redirect(`/signup/complete?email=${emailParam}&token=${tokenParam}`);
    return;
  }

  const emailParam = email ? encodeURIComponent(email as string) : "";
  const tokenParam = token ? encodeURIComponent(token as string) : "";
  res.redirect(`/dashboard?email=${emailParam}&token=${tokenParam}`);
};

export default handler;
