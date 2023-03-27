import Link from "next/link";
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
      <div className="">
        {links.map((link, i) => (
          <Link href={link.route}>{link.title}</Link>
        ))}
      </div>
      <div className="">{children}</div>
    </div>
  );
};

export default DomainsLayout;
