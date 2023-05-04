import axios from "axios";
import { GetServerSideProps } from "next";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document({
  favicon,
}: {
  favicon: { favicon: string | null };
}) {
  return (
    <Html lang="en">
      <Head />
      <title>{favicon?.favicon}</title>
      <link
        rel="shortcut icon"
        href={favicon?.favicon as string}
        type="image/x-icon"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  try {
    const response = await axios.get(
      `http://localhost:3310/favicon?blog=${req.headers.host}`
    );
    const favicon = response.data;
    return { props: { favicon } };
  } catch (error) {
    return { props: { favicon: null } };
  }
};
