import React from "react";

const InputGroup = ({ text }: { text: string }) => {
  return (
    <div>
      <input type="text" />
      {text}
    </div>
  );
};

export default InputGroup;
