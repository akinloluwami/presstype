import InputGroup from "@/components/elements/input_group/InputGroup";
import DashboardLayout from "@/layouts/dashboard_layout";
import DomainsLayout from "@/layouts/domains_layout/DomainsLayout";
import React from "react";

const Index = () => {
  return (
    <DomainsLayout>
      <InputGroup text="presstype.co" />
    </DomainsLayout>
  );
};

export default Index;
