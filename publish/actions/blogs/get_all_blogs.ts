import axios from "axios";

const getAllBlogs = async (token: string) => {
  try {
    const res = await axios.get("/api/blogs/get-author-blogs", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (e: any) {
    return e.response;
  }
};

export default getAllBlogs;
