import { useTokenStore } from "@/stores/tokenStore";
import axios from "axios";

const useGetAllPosts = () => {
  const { token } = useTokenStore();
  const getAllPosts = async () => {
    try {
      const response = await axios.get("/api/blogs/posts/get-all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error: any) {
      return error.response;
    }
  };

  return getAllPosts;
};

export default useGetAllPosts;
