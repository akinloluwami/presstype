import getAllBlogs from "@/actions/blogs/get_all_blogs";
import { useTokenStore } from "@/stores/tokenStore";
import { useEffect } from "react";

const BlogsList = () => {
  const { token } = useTokenStore();

  useEffect(() => {
    (async () => {
      const res = await getAllBlogs(token);
      console.log(res);
    })();
  }, []);

  return <div>BlogsList</div>;
};

export default BlogsList;
