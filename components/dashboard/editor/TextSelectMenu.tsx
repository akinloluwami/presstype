import { useCallback } from "react";

const TextSelectMenu = ({ editor }: any) => {
  const setLink = useCallback(() => {
    const previousUrl = editor?.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);
    if (url === null) {
      return;
    }
    if (url === "") {
      editor?.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

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
