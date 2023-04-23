import axios from "axios";

const getAllBlogs = async () => {
  try {
    const res = await axios.get("/api/blogs/get-author-blogs");
    return res.data;
  } catch (e: any) {
    return e.response;
  }
};

export default getAllBlogs;
