// verifyRefreshToken.ts
import jwt from "jsonwebtoken";

export const verifyRefreshToken = (token: string) => {
  try {
    const payload = jwt.verify(token, process.env.JWT_REFRESH_SECRET!) as {
      sub: string;
      jti: string;
    };
    return payload;
  } catch (error) {
    console.error(error);
    return null;
  }
};
