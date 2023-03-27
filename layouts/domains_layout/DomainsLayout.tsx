import { useRouter } from "next/router";
import React from "react";

const DomainsLayout = ({ children }: any) => {
  const router = useRouter();
  return (
    <div>
      <div className=""></div>
      <div className="">{children}</div>
    </div>
  );
};

export default DomainsLayout;
