import crypto from "crypto";

const generateToken = () => {
  const buffer = crypto.randomBytes(4);
  return parseInt(buffer.toString("hex"), 16).toString(36).slice(0, 9);
};

export default generateToken;
