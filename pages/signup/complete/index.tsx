import DoYouWantToImport from "@/components/auth/signup_steps/DoYouWantToImport";
import PubNameAndDesc from "@/components/auth/signup_steps/PubNameAndDesc";
import { useState, useEffect } from "react";
import styles from "./styles.module.scss";

const Complete = () => {
  const [step, setStep] = useState<number>(0);

  const nextHandler = () => {
    setStep(step + 1);
  };
  const prevHandler = () => {
    setStep(step - 1);
  };
  return (
    <div className={styles.complete_container}>
      <h1>P</h1>

      <div className={styles.texts}>
        {step === 0 && <h2>Setup your PressType</h2>}
        {step === 1 && <h2>Do you have an existing blog?</h2>}
        {step === 0 && <p>You can change this later</p>}
      </div>
      <div className="">
        {step === 0 && <PubNameAndDesc />}
        {step === 1 && <DoYouWantToImport />}
      </div>
      <div className={styles.steps_btn}>
        <button
          onClick={prevHandler}
          className={`${styles.btn} ${step === 0 && styles.hidden}`}
        >
          Back
        </button>

        <button onClick={nextHandler} className={styles.btn}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default Complete;
