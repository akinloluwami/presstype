import { useRouter } from "next/router";
import React from "react";

const DomainsLayout = ({ children }: any) => {
  const links = [
    {
      title: "presstype.co sub-domain",
      route: "/domain",
    },
    {
      title: "Custom Domain",
      route: "/domain/custom",
    },
  ];
  const router = useRouter();
  return (
    <div>
      <div className=""></div>
      <div className="">{children}</div>
    </div>
  );
};

export default DomainsLayout;
