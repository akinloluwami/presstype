import DecodedToken from "@/interfaces/DecodedToken";
import jwt from "jsonwebtoken";
import dayjs from "dayjs";

const decodeToken = (token: string): DecodedToken | null => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken;
    const now = dayjs();
    const expirationTime = dayjs.unix(decoded.exp);

    if (now.isAfter(expirationTime)) {
      return null;
    }

    return decoded;
  } catch (err) {
    return null;
  }
};

export default decodeToken;
