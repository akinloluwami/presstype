import { useNewPostStore } from "@/stores/newPostStore";
import { useTokenStore } from "@/stores/tokenStore";
import axios from "axios";

const usePublishPost = () => {
  const { title, content } = useNewPostStore();
  const { token } = useTokenStore();

  const publishPost = async () => {
    try {
      const payload = { content, title };
      const response = await axios.post("/api/blogs/posts/create", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error: any) {
      return error.response;
    }
  };

  return publishPost;
};

export default usePublishPost;
