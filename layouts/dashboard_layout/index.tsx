import Sidebar from "@/components/dashboard/sidebar";
import React from "react";

const DashboardLayout = ({ children }: any) => {
  return (
    <div>
      <Sidebar />
      <>{children}</>
    </div>
  );
};

export default DashboardLayout;
