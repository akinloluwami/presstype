import NoPost from "@/components/dashboard/no_post/NoPost";
import Posts from "@/components/dashboard/posts/Posts";
import DashboardLayout from "@/layouts/dashboard_layout";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useGetAllPosts from "@/actions/blogs/get_all_posts";

const Index = () => {
  const [posts, setPosts] = useState<[]>([]);

  const getAllPosts = useGetAllPosts();

  useEffect(() => {
    (async () => {
      const res = await getAllPosts();

      if (res.data.blogPosts) {
        setPosts(res.data.blogPosts);
        return;
      }
    })();
  }, []);

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
