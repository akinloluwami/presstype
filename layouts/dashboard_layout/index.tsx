import Sidebar from "@/components/dashboard/sidebar";
import { useTheme } from "@/contexts/ThemeContext";
import Head from "next/head";
import { useEffect } from "react";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { useTokenStore } from "@/stores/tokenStore";

const DashboardLayout = ({ children, page_name, showButton, button }: any) => {
  const { theme } = useTheme();
  const router = useRouter();

  const { setToken } = useTokenStore();

  useEffect(() => {
    const tokenFromUrl = router.query.token;

    if (tokenFromUrl) {
      setToken(tokenFromUrl as string);
      const urlWithoutToken = window.location.pathname;
      history.replaceState(null, "", urlWithoutToken);
    }
  }, [router.query.token]);

  return (
    <div className={styles.dashboard_layout_container} data-theme={theme}>
      <Head>
        <title>{page_name} - PressType</title>
      </Head>
      <div className={styles.sidebar} data-theme={theme}>
        <Sidebar />
      </div>
      <div className={styles.main}>
        <div className={styles.top}>
          {/* <h1>{page_name}</h1> */}
          {showButton && button}
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
