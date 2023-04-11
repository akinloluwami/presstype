import React, { useState } from "react";

const LinkSelectMenu = ({ editor }: any) => {
  const [linkHref, setLinkHref] = useState<string | undefined>(
    editor.isActive("link") ? editor.getAttributes("link").href : undefined
  );

  const handleChangeLinkHref = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLinkHref(event.target.value);
  };

  const handleApplyLinkHref = () => {
    if (linkHref !== undefined) {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: linkHref })
        .run();
    }
  };

  const handleUnsetLink = () => {
    editor.chain().focus().unsetLink().run();
  };

  return (
    <div>
      <button onClick={handleUnsetLink}>Unset link</button>
      <div>
        <label htmlFor="link-href-input">Link address:</label>
        <input
          id="link-href-input"
          type="text"
          value={linkHref || ""}
          onChange={handleChangeLinkHref}
        />
        <button onClick={handleApplyLinkHref}>Apply</button>
      </div>
    </div>
  );
};

export default LinkSelectMenu;
