import React from "react";

const LinkSelectMenu = ({ editor }: any) => {
  return (
    <div>
      <button onClick={() => editor.chain().focus().unsetLink().run()}>
        Unset link
      </button>
    </div>
  );
};

export default LinkSelectMenu;
