import { allowMethods } from "@/middlewares/allowMethods";
import Blog from "@/schema/Blog";
import { connectToDatabase } from "@/utils/db";
import sendMail from "@/utils/send_email";
import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import jwt, { Secret } from "jsonwebtoken";
import AuthToken from "@/schema/AuthToken";
import generateToken from "@/utils/generate_token";
import dayjs from "dayjs";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;
  if (!email) {
    res.status(400).send("Invalid email");
    return;
  }
  if (!validator.isEmail(email)) {
    res.status(400).send("Invalid email");
    return;
  }

  await connectToDatabase();

  const emailExists = await Blog.findOne({ email });

  if (emailExists) {
    res.status(409).send("Email already exists");
    return;
  }

  try {
    await Blog.create({
      email,
    });
    const token = generateToken();
    await AuthToken.create({
      token,
      email,
      expiry: dayjs().add(1, "hour"),
    });

    const magicLinkUrl = `${process.env.BASE_URL}/api/callback/signup?token=${token}&email=${email}`;
    const to = email;
    const subject = "Welcome to PressType";
    const html = `
    <h1>Welcome to PressType</h1>
    <p>Click the link below to verify your email and complete your signup</p>
    <a href="${magicLinkUrl}" target="_blank" style="background-color: #007bff; color: #fff; padding: 12px 24px; border-radius: 4px; text-decoration: none;">Verify email</a>
    `;
    sendMail(to, subject, html);
    res
      .status(201)
      .send("Sign up successful, check your email to complete your signup.");
    return;
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
};

export default allowMethods(["POST"])(handler);
