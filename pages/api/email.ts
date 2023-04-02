import sendMail from "@/utils/send_email";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const to = "akinkunmioye42@gmail.com";
  const subject = "Test Email";
  const html =
    "<p>This is a <b>test email</b> sent from <i>Nodemailer</i>!</p>";

  try {
    sendMail(to, subject, html);
    res.status(200).send("Test email sent!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending test email");
  }
};
