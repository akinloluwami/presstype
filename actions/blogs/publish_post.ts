import { useNewPostStore } from "@/stores/newPostStore";

const publishPost = async () => {
  const { title, content } = useNewPostStore();

  const data = { content, title };
};

export default publishPost;
