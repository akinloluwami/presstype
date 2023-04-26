// import transporter from "@/config/transporter";

import axios from "axios";
import { log } from "console";

interface MailOptions {
  to: string;
  subject: string;
  body: string;
}

const sendMail = async ({ to, subject, body }: MailOptions) => {
  try {
    const res = await axios.post(
      process.env.PLUNK_API_URL as string,
      {
        to,
        subject,
        body,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.PLUNK_SECRET_API_KEY}`,
        },
      }
    );
    log(res);
  } catch (e) {
    log(e);
  }
};

export default sendMail;

// return new Promise((resolve, reject) => {
//   const mailOptions = {
//     from: `"Akinkunmi from PressType" <${process.env.SMTP_USER}>`,
//     to,
//     subject,
//     html,
//   };
//   transporter.sendMail(mailOptions, (error, info: any) => {
//     if (error) {
//       console.log(error);
//       reject(error);
//     } else {
//       console.log(`Email sent: ${info.response}`);
//       resolve("Hi");
//     }
//   });
// });
