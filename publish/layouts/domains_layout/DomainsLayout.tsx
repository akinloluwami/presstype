import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import DashboardLayout from "../dashboard_layout";
import styles from "./styles.module.scss";

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
    <DashboardLayout page_name="Domains">
      <div className={styles.links}>
        {links.map((link, i) => (
          <Link
            href={link.route}
            key={i}
            className={`${router.asPath === link.route && styles.active}`}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="">{children}</div>
    </DashboardLayout>
  );
};

export default DomainsLayout;
