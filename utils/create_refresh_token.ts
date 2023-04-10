// createRefreshToken.ts
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";

export const createRefreshToken = (userId: string) => {
  const refreshToken = uuidv4();
  const refreshTokenExpiresIn = "7d";

  const refreshTokenPayload = {
    sub: userId,
    jti: refreshToken,
  };

  const refreshTokenOptions: jwt.SignOptions = {
    expiresIn: refreshTokenExpiresIn,
  };

  const signedRefreshToken = jwt.sign(
    refreshTokenPayload,
    process.env.JWT_REFRESH_SECRET!,
    refreshTokenOptions
  );

  return {
    refreshToken: signedRefreshToken,
    refreshTokenExpiresIn: refreshTokenExpiresIn,
  };
};
