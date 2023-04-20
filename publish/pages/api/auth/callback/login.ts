import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/utils/db";
import AuthToken from "@/schema/AuthToken";
import dayjs from "dayjs";
import jwt from "jsonwebtoken";
import Blog from "@/schema/Blog";
import decodeToken from "@/utils/decode_token";
import DecodedToken from "@/interfaces/DecodedToken";
import Author from "@/schema/Author";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { token, email } = req.query;
  await connectToDatabase();

  const authToken = await AuthToken.findOne({ token });

  if (!authToken || authToken.email !== email) {
    res.status(400).send("Invalid token or email");
    return;
  }

  const decoded: DecodedToken | null = decodeToken(token as string);

  if (!decoded) {
    res.status(400).send("Token expired");
    return;
  }

  const author = await Author.findOne({ email });

  if (!author) {
    res.status(404).send("No account associated with this email");
    return;
  }

  const tokenParam = token ? encodeURIComponent(token as string) : "";
  // if (!blog.isOnboardingComplete) {
  //   res.redirect(`/signup/complete?&token=${tokenParam}`);
  //   return;
  // }
  res.redirect(`/dashboard?token=${tokenParam}`);
};

export default handler;
