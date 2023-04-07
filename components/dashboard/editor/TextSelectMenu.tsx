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

  const tools = [
    {
      text: "Bold",
      node: (
        <button onClick={() => editor.chain().focus().toggleBold().run()}>
          Bold
        </button>
      ),
    },
    {
      text: "Italic",
      node: (
        <button onClick={() => editor.chain().focus().toggleItalic().run()}>
          Italic
        </button>
      ),
    },
    {
      text: "Strike",
      node: (
        <button onClick={() => editor.chain().focus().toggleStrike().run()}>
          Strike
        </button>
      ),
    },
    {
      text: "Link",
      node: <button onClick={setLink}>Link</button>,
    },
  ];

  return (
    <div>
      <>
        {tools.map((tool, i) => (
          <>{tool.node}</>
        ))}
      </>
    </div>
  );
};

export default TextSelectMenu;
