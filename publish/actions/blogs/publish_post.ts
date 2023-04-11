import { useNewPostStore } from "@/stores/newPostStore";
import { useTokenStore } from "@/stores/tokenStore";
import axios from "axios";
import { useRouter } from "next/router";

const usePublishPost = () => {
  const { title, content, setContent, setTitle, setCoverImage } =
    useNewPostStore();
  const router = useRouter();
  const { token } = useTokenStore();

  const publishPost = async () => {
    try {
      const payload = { content, title };
      const response = await axios.post("/api/blogs/posts/create", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      router.push("/posts");
      setContent("");
      setTitle("");
      setCoverImage?.("");
      return response;
    } catch (error: any) {
      return error.response;
    }
  };

  return publishPost;
};

export default usePublishPost;
