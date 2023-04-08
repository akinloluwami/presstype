import { useNewPostStore } from "@/stores/newPostStore";

const publishPost = async () => {
  const { title, content } = useNewPostStore();

  const payload = { content, title };
  console.log(payload);
};

export default publishPost;
