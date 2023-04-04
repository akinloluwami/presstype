import { allowMethods } from "@/middlewares/allowMethods";
import Blog from "@/schema/Blog";
import { connectToDatabase } from "@/utils/db";
import sendMail from "@/utils/send_email";
import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import jwt, { Secret } from "jsonwebtoken";
import AuthToken from "@/schema/AuthToken";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;
  if (!email) {
    res.status(400).json({ message: "Invalid email" });
    return;
  }
  if (!validator.isEmail(email)) {
    res.status(400).json({ message: "Invalid email" });
    return;
  }

  await connectToDatabase();

  const user = await Blog.findOne({ email });

  if (!user) {
    res.status(401).json({ message: "User not found" });
    return;
  }

  try {
    const token = jwt.sign({ email }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });
    await AuthToken.create({
      token,
      email,
    });

    const magicLinkUrl = `${process.env.BASE_URL}/api/auth/callback/login?token=${token}&email=${email}`;

    const to = email;
    const subject = "Login to Your Account";
    const html = `
      <h1>Click the Link to Login to Your Account</h1>
      <a href="http://${magicLinkUrl}" target="_blank" style="background-color: #007bff; color: #fff; padding: 12px 24px; border-radius: 4px; text-decoration: none;">Login Now</a>
    `;
    sendMail(to, subject, html);

    res.status(200).json({
      message: "Check your email for a link to login to your account",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export default allowMethods(["POST"])(handler);
