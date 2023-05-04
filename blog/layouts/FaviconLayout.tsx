import Head from "next/head";
import React, { ReactNode } from "react";

const FaviconLayout = ({
  children,
  favicon,
}: {
  children: ReactNode;
  favicon: string;
}) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Head>
    </>
  );
};

export default FaviconLayout;
