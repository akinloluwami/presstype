import Themes from "@/components/dashboard/themes/Themes";
import Toggle from "@/components/elements/toggle/Toggle";
import DashboardLayout from "@/layouts/dashboard_layout";
import React from "react";

const Index = () => {
  return (
    <DashboardLayout page_name="Appearance">
      <Themes />
      <Toggle on />
    </DashboardLayout>
  );
};

export default Index;
