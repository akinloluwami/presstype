import DoYouWantToImport from "@/components/auth/signup_steps/do_you_want_to_import/DoYouWantToImport";
import PubNameAndDesc from "@/components/auth/signup_steps/PubNameAndDesc";
import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { useCompleteSignupStore } from "@/stores/completeSignUpStore";

const Complete = () => {
  const { step, setStep, title, subdomain, about } = useCompleteSignupStore();

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
        <h2>Setup your PressType</h2>
        {/* {step === 0 && <h2>Setup your PressType</h2>} */}
        {/* {step === 1 && <h2>Do you have an existing blog?</h2>} */}
        {step === 0 && <p>You can change this later</p>}
      </div>
      <div className="">
        {step === 0 && <PubNameAndDesc />}
        {step === 1 && <DoYouWantToImport />}
      </div>
      <div className={styles.steps_btn}>
        {step === 0 && (
          <button onClick={nextHandler} className={styles.btn}>
            Continue
          </button>
        )}
      </div>
    </div>
  );
};

export default Complete;
