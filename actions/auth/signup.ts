import axios from "axios";

const signUp = async (email: string) => {
  try {
    const response = await axios.post(`/api/auth/signupwithmagiclink`, {
      email,
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export default signUp;
