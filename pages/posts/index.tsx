import NoPost from "@/components/dashboard/no_post/NoPost";
import DashboardLayout from "@/layouts/dashboard_layout";
import React from "react";

const Index = () => {
  return (
    <DashboardLayout page_name="Posts">
      <NoPost />
    </DashboardLayout>
  );
};

export default Index;
