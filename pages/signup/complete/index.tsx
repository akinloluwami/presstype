import DoYouWantToImport from "@/components/auth/signup_steps/DoYouWantToImport";
import PubNameAndDesc from "@/components/auth/signup_steps/PubNameAndDesc";
import { useState } from "react";

const Complete = () => {
  const [step, setStep] = useState<number>(0);

  const nextHandler = () => {
    setStep(step + 1);
  };
  const prevHandler = () => {
    setStep(step - 1);
  };
  return (
    <div>
      Complete
      <div className="">
        {step === 0 && <PubNameAndDesc />}
        {step === 1 && <DoYouWantToImport />}
      </div>
      <div className="">
        <button onClick={prevHandler}>Back</button>
        <button onClick={nextHandler}>Continue</button>
      </div>
    </div>
  );
};

export default Complete;
