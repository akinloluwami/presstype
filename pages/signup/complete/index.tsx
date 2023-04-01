import DoYouWantToImport from "@/components/auth/signup_steps/DoYouWantToImport";
import PubNameAndDesc from "@/components/auth/signup_steps/PubNameAndDesc";
import { useState } from "react";

const Complete = () => {
  const [step, setStep] = useState<number>(0);
  return (
    <div>
      Complete
      <div className="">
        <PubNameAndDesc />
        <DoYouWantToImport />
      </div>
      <div className="">
        <button>Back</button>
        <button>Continue</button>
      </div>
    </div>
  );
};

export default Complete;
