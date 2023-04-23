import axios from "axios";

const getAllPosts = async (token: string, blogId: string) => {
  try {
    const response = await axios.get(
      `/api/blogs/posts/get-all?blogId=${blogId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export default getAllPosts;
