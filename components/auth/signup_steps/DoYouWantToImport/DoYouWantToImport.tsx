import Link from "next/link";
import React, { useState } from "react";
import styles from "./styles.module.scss";

const DoYouWantToImport = () => {
  const [yes, setYes] = useState(false);
  const [wannaImport, setWannaImport] = useState(false);
  const [chosen, setChosen] = useState(false);
  const [chosen2, setChosen2] = useState(false);
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

      {wannaImport && (
        <div className="">
          <h4>Choose your provider</h4>
        </div>
      )}
    </div>
  );
};

export default DoYouWantToImport;
