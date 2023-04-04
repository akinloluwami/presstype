import DoYouWantToImport from "@/components/auth/signup_steps/do_you_want_to_import/DoYouWantToImport";
import PubNameAndDesc from "@/components/auth/signup_steps/PubNameAndDesc";
import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { useCompleteSignupStore } from "@/stores/completeSignUpStore";
import completeSignUp from "@/actions/auth/complete";
import { useRouter } from "next/router";
import { useTokenStore } from "@/stores/tokenStore";

const Complete = () => {
  const { step, setStep, title, subdomain, about } = useCompleteSignupStore();
  const { token, setToken } = useTokenStore();

  const router = useRouter();
  useEffect(() => {
    setToken(router.query.token as string);
  }, [router]);

  const nextHandler = async () => {
    const data = { title, subdomain, about };
    const next = await completeSignUp(data, token);
    if (next.status === 200) {
      //do something
      return;
    }
    console.log(next);
  };

  return (
    <div className={styles.complete_container}>
      <h1>P</h1>

      <div className={styles.texts}>
        <h2>Setup your PressType</h2>
        {/* {step === 0 && <h2>Setup your PressType</h2>} */}
        {/* {step === 1 && <h2>Do you have an existing blog?</h2>} */}
        {step === 0 && <p>You can change these later</p>}
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
