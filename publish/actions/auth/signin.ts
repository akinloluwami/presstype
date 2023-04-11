import axios from "axios";

const singIn = async (email: string) => {
  try {
    const response = await axios.post(`/api/auth/signinwithmagiclink`, {
      email,
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export default singIn;
