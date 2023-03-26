import Themes from "@/components/dashboard/themes/Themes";
import DashboardLayout from "@/layouts/dashboard_layout";
import React from "react";

const Index = () => {
  return (
    <DashboardLayout page_name="Appearance">
      <Themes />
    </DashboardLayout>
  );
};

export default Index;
