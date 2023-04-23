import getAllBlogs from "@/actions/blogs/get_all_blogs";
import { useBlogStore } from "@/stores/blogStore";
import { useTokenStore } from "@/stores/tokenStore";
import { useState, useEffect } from "react";

const BlogsList = () => {
  const { token } = useTokenStore();
  const { setBlogId } = useBlogStore();

  const [blogs, setBlogs] = useState<
    {
      id: string;
      title: string;
    }[]
  >([{ id: "", title: "" }]);
  useEffect(() => {
    (async () => {
      const res = await getAllBlogs(token);
      setBlogs(res.blogs);
      setBlogId(res.blogs[0].id);
    })();
  }, []);

  return (
    <select className="bg-black my-5 w-full px-5 py-3 outline-0 rounded-md">
      {blogs.map((blog) => (
        <option key={blog.id} value={blog.id}>
          {blog.title}
        </option>
      ))}
    </select>
  );
};

export default BlogsList;
