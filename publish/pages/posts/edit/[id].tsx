import Editor from "@/components/dashboard/editor/Editor";
import NewPostHeader from "@/components/dashboard/posts/NewPostHeader/NewPostHeader";
import DashboardLayout from "@/layouts/dashboard_layout";
import { useBlogStore } from "@/stores/blogStore";
import { useNewPostStore } from "@/stores/newPostStore";
import { useTokenStore } from "@/stores/tokenStore";
import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const EditPost = () => {
  const router = useRouter();

  const [post, setPost] = useState<{ content: string; title: string }>({
    title: "",
    content: "",
  });
  const { token } = useTokenStore();
  const { blogId } = useBlogStore();
  // const { setContent, title, setTitle } = useNewPostStore();

  useEffect(() => {
    if (!router.query.id) {
      return;
    }
    (async () => {
      const res = await axios.get(
        `/api/blogs/posts/get-one?id=${router?.query?.id}&blogId=${blogId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
      // setTitle(res.data.title);
      // setContent(res?.data?.content);
      setPost(res.data);
    })();
  }, [router.query.id, blogId, token]);

  return (
    <>
      <DashboardLayout>
        <NewPostHeader />
        <input
          type="text"
          className={`w-full text-4xl bg-transparent mb-5 outline-none mt-2`}
          placeholder="Article title"
          // onChange={(e) => setTitle(e.target.value)}
          defaultValue={post.title}
        />
        <div className="">
          <Editor editorContent={post?.content || post.content} />
        </div>
      </DashboardLayout>
    </>
  );
};

export default EditPost;
