import transporter from "@/config/transporter";

const sendMail = (to: string, subject: string, text: string, html: string) => {
  const mailOptions = {
    from: "your-email@gmail.com",
    to,
    subject,
    text,
    html,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
};

export default sendMail;
