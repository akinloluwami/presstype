import { useCallback } from "react";

const TextSelectMenu = ({ editor }: any) => {
  const setLink = useCallback(() => {
    const previousUrl = editor?.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor?.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

    // update link
    editor
      ?.chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: url })
      .run();
  }, [editor]);
  return (
    <div>
      <>
        <button onClick={setLink}>link</button>
        <button onClick={() => editor.chain().focus().toggleBold().run()}>
          bold
        </button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()}>
          italic
        </button>
        <button onClick={() => editor.chain().focus().toggleStrike().run()}>
          strike
        </button>
      </>
    </div>
  );
};

export default TextSelectMenu;
