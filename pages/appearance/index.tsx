import DefaultBlogTheme from "@/components/dashboard/default_blog_theme/DefaultBlogTheme";
import Themes from "@/components/dashboard/themes/Themes";
import UploadBlogLogo from "@/components/dashboard/upload_blog_logo/UploadBlogLogo";
import DashboardLayout from "@/layouts/dashboard_layout";
import React from "react";

const Index = () => {
  return (
    <DashboardLayout page_name="Appearance">
      <Themes />
      <UploadBlogLogo />
      <DefaultBlogTheme />
    </DashboardLayout>
  );
};

export default Index;
