import { useCallback, useState } from "react";
import styles from "./styles.module.scss";
import {
  MdFormatBold,
  MdFormatItalic,
  MdLink,
  MdOutlineStrikethroughS,
} from "react-icons/md";
import { FaCode, FaHighlighter } from "react-icons/fa";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Modal from "@/components/elements/modal/Modal";

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
        <button onClick={}>
          <MdLink />
        </button>
      ),
    },
    {
      text: "Highlight",
      node: (
        <button
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          className={editor.isActive("highlight") ? "is-active" : ""}
        >
          <FaHighlighter />
        </button>
      ),
    },
    {
      text: "Inline code",
      node: (
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={editor.isActive("code") ? "is-active" : ""}
        >
          <FaCode />
        </button>
      ),
    },
  ];

  return (
    <div className={styles.text_select_menu}>
      {tools.map((tool, i) => (
        <Tippy content={tool.text} key={i}>
          <button>{tool.node}</button>
        </Tippy>
      ))}
    </div>
  );
};

export default TextSelectMenu;
