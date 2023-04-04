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
    axios.post("/api/blogs/complete", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {}
};
