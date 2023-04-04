import DecodedToken from "@/interfaces/DecodedToken";
import jwt from "jsonwebtoken";

const decodeToken = (token: string): DecodedToken => {
  return jwt.verify(token, process.env.JWT_SECRET!) as unknown as DecodedToken;
};

export default decodeToken;
