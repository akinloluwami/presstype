import NoPost from "@/components/dashboard/no_post/NoPost";
import Posts from "@/components/dashboard/posts/Posts";
import DashboardLayout from "@/layouts/dashboard_layout";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  return (
    <DashboardLayout
      page_name="Posts"
      showButton={true}
      button={<button>Add new</button>}
    >
      {/* <NoPost /> */}
      <Posts />
    </DashboardLayout>
  );
};

export default Index;
