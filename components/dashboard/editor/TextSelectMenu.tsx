import { useCallback } from "react";
import styles from "./styles.module.scss";
import {
  MdFormatBold,
  MdFormatItalic,
  MdLink,
  MdOutlineStrikethroughS,
} from "react-icons/md";
import { FaCode, FaHighlighter } from "react-icons/fa";

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
          <MdFormatBold />
        </button>
      ),
    },
    {
      text: "Italic",
      node: (
        <button onClick={() => editor.chain().focus().toggleItalic().run()}>
          <MdFormatItalic />
        </button>
      ),
    },
    {
      text: "Strike",
      node: (
        <button onClick={() => editor.chain().focus().toggleStrike().run()}>
          <MdOutlineStrikethroughS />
        </button>
      ),
    },
    {
      text: "Link",
      node: (
        <button onClick={setLink}>
          <MdLink />
        </button>
      ),
    },
    {
      text: "Highlight",
      node: (
        <button onClick={setLink}>
          <FaHighlighter />
        </button>
      ),
    },
    {
      text: "Inline code",
      node: (
        <button onClick={setLink}>
          <FaCode />
        </button>
      ),
    },
  ];

  return (
    <div className={styles.text_select_menu}>
      <>
        {tools.map((tool, i) => (
          <div key={i}>{tool.node}</div>
        ))}
      </>
    </div>
  );
};

export default TextSelectMenu;
