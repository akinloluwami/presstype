import CustomDomainComp from "@/components/dashboard/custom_domain/CustomDomain";
import DashboardLayout from "@/layouts/dashboard_layout";
import DomainsLayout from "@/layouts/domains_layout/DomainsLayout";
import React from "react";

const CustomDomain = () => {
  return (
    <DomainsLayout>
      <CustomDomainComp />
    </DomainsLayout>
  );
};

export default CustomDomain;
