import InputGroup from "@/components/elements/input_group/InputGroup";
import DashboardLayout from "@/layouts/dashboard_layout";
import DomainsLayout from "@/layouts/domains_layout/DomainsLayout";
import React from "react";

const Index = () => {
  return (
    <DomainsLayout>
      <h4
        style={{
          fontWeight: 500,
        }}
      >
        Change presstype.co sub-domain
      </h4>
      <i
        style={{
          fontSize: 10,
        }}
      >
        Presstype won't redirect your old sub-domain to the new one.
      </i>
      <InputGroup text=".presstype.co" />
    </DomainsLayout>
  );
};

export default Index;
