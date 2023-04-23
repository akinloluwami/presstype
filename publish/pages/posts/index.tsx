import NoPost from "@/components/dashboard/no_post/NoPost";
import Posts from "@/components/dashboard/posts/Posts";
import DashboardLayout from "@/layouts/dashboard_layout";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import getAllPosts from "@/actions/blogs/get_all_posts";
import { useTokenStore } from "@/stores/tokenStore";
import { useBlogStore } from "@/stores/blogStore";

const Index = () => {
  const [posts, setPosts] = useState<[]>([]);
  const { token } = useTokenStore();
  const { blogId } = useBlogStore();

  useEffect(() => {
    (async () => {
      const res = await getAllPosts(token, blogId);

      if (res.data.blogPosts) {
        setPosts(res.data.blogPosts);
        return;
      }
    })();
  }, [token, blogId]);

  const router = useRouter();
  return (
    <DashboardLayout
      page_name="Posts"
      showButton={true}
      button={
        <button onClick={() => router.push("/posts/new")}>Add new</button>
      }
    >
      {posts.length < 1 ? <NoPost /> : <Posts posts={posts} />}
    </DashboardLayout>
  );
};

export default Index;
