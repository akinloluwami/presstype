import Link from "next/link";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import BlogProviders from "../blog_providers/BlogProviders";
import { useTokenStore } from "@/stores/tokenStore";

const DoYouWantToImport = () => {
  const [yes, setYes] = useState(false);
  const [wannaImport, setWannaImport] = useState(false);
  const [chosen, setChosen] = useState(false);
  const [chosen2, setChosen2] = useState(false);
  const { token } = useTokenStore();
  return (
    <div>
      <div className={styles.questions}>
        {!chosen && (
          <>
            <h2>Do you have an existing blog?</h2>
            <button
              onClick={() => {
                setYes(true);
                setChosen(true);
              }}
            >
              Yes
            </button>
            <Link href={"/dashboard"}>
              <button>No, continue to dashboard</button>
            </Link>
          </>
        )}
        {yes && !chosen2 && (
          <>
            <h2>Do you wanna import your posts?</h2>
            <button
              onClick={() => {
                setWannaImport(true);
                setChosen2(true);
              }}
            >
              Yes
            </button>
            <Link href={"/dashboard"}>
              <button>No, continue to dashboard</button>
            </Link>
          </>
        )}
      </div>

      {wannaImport && <BlogProviders />}
    </div>
  );
};

export default DoYouWantToImport;
