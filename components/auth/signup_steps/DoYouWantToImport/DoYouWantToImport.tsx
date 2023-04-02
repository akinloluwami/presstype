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
          <div className="">
            <p>Do you have an existing blog?</p>
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
          </div>
        )}
        {yes && !chosen2 && (
          <div className="">
            <p>Do you wanna import your posts?</p>
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
          </div>
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
