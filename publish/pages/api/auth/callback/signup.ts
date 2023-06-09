import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/utils/db";
import AuthToken from "@/schema/AuthToken";
import Blog from "@/schema/Blog";
import decodeToken from "@/utils/decode_token";
import Author from "@/schema/Author";

interface DecodedToken {
  email: string;
  iat: number;
  exp: number;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { token, email } = req.query;
  await connectToDatabase();

  const authToken = await AuthToken.findOne({ token });

  if (!authToken || authToken.email !== email) {
    res.status(400).send("Invalid token or email");
    return;
  }

  if (authToken.is_used) {
    res.status(400).send("Token already used");
    return;
  }

  const decoded: DecodedToken | null = decodeToken(token as string);

  if (!decoded) {
    res.status(400).send("Token expired");
    return;
  }
  const blog = await Author.findOne({ email });

  if (blog) {
    blog.isEmailVerified = true;
    await blog.save();
  }

  const emailParam = email ? encodeURIComponent(email as string) : "";
  const tokenParam = token ? encodeURIComponent(token as string) : "";

  authToken.is_used = true;
  await authToken.save();

  if (blog.is_onboarding_complete) {
    res.redirect(`/dashboard&token=${tokenParam}`);
    return;
  }
  res.redirect(`/signup/complete?email=${emailParam}&token=${tokenParam}`);
};

export default handler;
