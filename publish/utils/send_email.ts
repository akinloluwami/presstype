import transporter from "@/config/transporter";

const sendMail = (to: string, subject: string, html: string) => {
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: `"Akinkunmi from PressType" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
    };

    transporter.sendMail(mailOptions, (error, info: any) => {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log(`Email sent: ${info.response}`);
        resolve("Hi");
      }
    });
  });
};

export default sendMail;
