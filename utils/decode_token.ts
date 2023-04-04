import jwt from "jsonwebtoken";

interface DecodedToken {
  email: string;
  iat: number;
  exp: number;
}

const decodeToken = (token: string): DecodedToken => {
  return jwt.verify(token, process.env.JWT_SECRET!) as unknown as DecodedToken;
};

export default decodeToken;
