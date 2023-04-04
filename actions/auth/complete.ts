import axios from "axios";

const completeSignUp = async (
  {
    title,
    about,
    subdomain,
  }: {
    title: string;
    about: string;
    subdomain: string;
  },
  token: string
) => {
  const data = { title, about, subdomain };

  try {
    const response = await axios.put("/api/blogs/complete", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export default completeSignUp;
