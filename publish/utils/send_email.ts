import transporter from "@/config/transporter";

const sendMail = (to: string, subject: string, html: string) => {
  const mailOptions = {
    from: `"Akinkunmi from PressType" <${process.env.SMTP_USER}>`,
    to,
    subject,
    html,
  };

  transporter.sendMail(mailOptions, (error, info: any) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
};

export default sendMail;
