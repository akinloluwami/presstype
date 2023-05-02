import sendMail from "@/utils/send_email";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const to = "akinkunmioye42@gmail.com";
  const subject = "Newsletter: Issue One";
  const body = `
    <h2>So it begins now fr...</h2><p></p><img src="https://presstype.s3.amazonaws.com/post_images/8195ab30-a8a4-45cc-b9b7-a4e4978c3dab-carbon.png width="200px"><p></p><p>PressType allows you to create blogs without code and start publishing in minutes.</p><p>Below is a screenshot of the dashboard.</p><img src="https://presstype.s3.amazonaws.com/post_images/238119a1-6e8f-4ef5-a38b-67969417397f-screencapture-localhost-6900-posts-new-2023-04-23-16_30_58.png"><p></p><p>We can continue writing here...</p><p></p>
    `;

  try {
    await sendMail({ to, subject, body });
    res.status(200).send("Test email sent!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending test emaill");
  }
};
