import { useNewPostStore } from "@/stores/newPostStore";

const usePublishPost = () => {
  const { title, content } = useNewPostStore();

  const publishPost = async () => {
    const payload = { content, title };
    console.log(payload);
  };

  return publishPost;
};

export default usePublishPost;
