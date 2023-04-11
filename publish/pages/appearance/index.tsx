import BlogAccentColorInput from "@/components/dashboard/blog_accent_color_input/BlogAccentColorInput";
import OptionToggle from "@/components/dashboard/option_toggle/OptionToggle";
import Themes from "@/components/dashboard/themes/Themes";
import UploadBlogLogo from "@/components/dashboard/upload_blog_logo/UploadBlogLogo";
import DashboardLayout from "@/layouts/dashboard_layout";
import React from "react";

const Index = () => {
  return (
    <DashboardLayout page_name="Appearance">
      <Themes />
      <UploadBlogLogo />
      <OptionToggle text="Default Dark Theme" />
      <OptionToggle text="Display article views" />
      <BlogAccentColorInput />
    </DashboardLayout>
  );
};

export default Index;
