import NoPost from "@/components/dashboard/no_post/NoPost";
import Posts from "@/components/dashboard/posts/Posts";
import DashboardLayout from "@/layouts/dashboard_layout";
import Link from "next/link";
import React from "react";

const Index = () => {
  return (
    <DashboardLayout
      page_name="Posts"
      showButton={true}
      button={<Link href={"/posts/new"}>Add new</Link>}
    >
      {/* <NoPost /> */}
      <Posts />
    </DashboardLayout>
  );
};

export default Index;
