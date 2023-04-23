import getAllBlogs from "@/actions/blogs/get_all_blogs";
import { useTokenStore } from "@/stores/tokenStore";
import { useState, useEffect } from "react";

const BlogsList = () => {
  const { token } = useTokenStore();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await getAllBlogs(token);
      console.log(res);
      setBlogs(res.blogs);
    })();
  }, []);

  return <select></select>;
};

export default BlogsList;
