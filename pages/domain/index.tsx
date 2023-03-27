import DashboardLayout from "@/layouts/dashboard_layout";
import DomainsLayout from "@/layouts/domains_layout/DomainsLayout";
import React from "react";

const Index = () => {
  return (
    <DashboardLayout page_name="Domain">
      <DomainsLayout>Subdomain</DomainsLayout>
    </DashboardLayout>
  );
};

export default Index;
