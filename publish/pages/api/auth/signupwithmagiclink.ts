import { allowMethods } from "@/middlewares/allowMethods";
import Blog from "@/schema/Blog";
import { connectToDatabase } from "@/utils/db";
import sendMail from "@/utils/send_email";
import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import jwt, { Secret } from "jsonwebtoken";
import AuthToken from "@/schema/AuthToken";
import RefreshToken from "@/schema/RefreshToken";
import Author from "@/schema/Author";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;
  if (!email) {
    res.status(400).json({ message: "Email is required" });
    return;
  }
  if (!validator.isEmail(email)) {
    res.status(400).json({ message: "Invalid email" });
    return;
  }

  await connectToDatabase();

  const emailExists = await Author.findOne({ email });

  if (emailExists) {
    res.status(409).json({ message: "Email already exists" });
    return;
  }

  try {
    const accessToken = jwt.sign({ email }, process.env.JWT_SECRET!);
    const refreshToken = jwt.sign({ email }, process.env.JWT_REFRESH_SECRET!, {
      expiresIn: "30d",
    });

    await AuthToken.create({
      token: accessToken,
      email,
    });
    await RefreshToken.create({
      token: refreshToken,
      email,
    });

    await Author.create({ email });
    const magicLinkUrl = `${process.env.BASE_URL}/api/auth/callback/signup?token=${accessToken}&email=${email}`;
    const to = email;
    const subject = "Welcome to PressType";
    const body = `
    <h1>Welcome to PressType</h1>
    <p>Click the link below to verify your email and complete your signup</p>
    <a href="http://${magicLinkUrl}" target="_blank" style="background-color: #007bff; color: #fff; padding: 12px 24px; border-radius: 4px; text-decoration: none;">Complete signup</a>
    `;

    await sendMail({ to, subject, body });
    res.status(201).json({
      message: "Sign up successful, check your email to complete your signup.",
    });
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export default allowMethods(["POST"])(handler);
