import axios from "axios";

const completeSignUp = async (
  {
    title,
    description,
    subdomain,
    author_name,
    author_bio,
  }: {
    title: string;
    description: string;
    subdomain: string;
    author_name: string;
    author_bio: string;
  },
  token: string
) => {
  const data = { title, description, subdomain, author_bio, author_name };

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
