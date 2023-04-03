import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/utils/db";
import AuthToken from "@/schema/AuthToken";
import dayjs from "dayjs";
import jwt from "jsonwebtoken";

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

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  t;

  const now = dayjs();

  if (now.isAfter(dayjs(expiry))) {
    res.status(400).send("Token expired");
    return;
  }

  res.redirect(
    "/signup/complete?email=" +
      encodeURIComponent(email) +
      "&token=" +
      encodeURIComponent(token as string)
  );
};

export default handler;
