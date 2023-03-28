import { useTheme } from "@/contexts/ThemeContext";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";

const CustomDomainComp = () => {
  const { theme } = useTheme();
  return (
    <div className={styles.custom_domain_container}>
      <h1>Set up a custom domain</h1>

      <div className={styles.steps_cards}>
        <div className={styles.steps_card_container}>
          <h4>1. Enter the domain you want to use</h4>
          <div className={styles.step_card} data-theme={theme}>
            <h4>Domain</h4>
            <input
              type="text"
              placeholder="www.reallyawesomewebsite.com"
              data-theme={theme}
            />

            <Link href={"https://blog.presstype.co/setting-up-a-custom-domain"}>
              Additional docs on setting up custom domains
            </Link>
          </div>
        </div>
        <div className={styles.steps_card_container}>
          <h4>2. Create your DNS record</h4>
          <div className={styles.step_card} data-theme={theme}>
            <h4>DNS records</h4>
            <p>
              Record type: <b>CNAME</b>{" "}
            </p>
            <p>
              Host: <b>www</b>{" "}
            </p>
            <p>
              Value: <b>akinkunmi.presstype.co</b>{" "}
            </p>
            <br />
            <p>
              Record type: <b>A</b>{" "}
            </p>
            <p>
              Host: <b>@</b>{" "}
            </p>
            <p>
              Value: <b>178.128.187.127</b>{" "}
            </p>
          </div>
        </div>
        <div className={styles.steps_card_container}>
          <h4>3. Activate custom domain</h4>
          <div className={styles.step_card} data-theme={theme}>
            <p>
              After you’ve confirmed that the DNS records have been created, hit
              the button below. It may take up to 20 minutes to activate your
              domain, so this is a good time for a drink and a stretch!
            </p>
            <button>Activate</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDomainComp;
