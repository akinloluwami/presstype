import React from "react";
import {
  useEditor,
  EditorContent,
  FloatingMenu,
  BubbleMenu,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import EditorMenu from "./Menu";
import Link from "@tiptap/extension-link";
import styles from "./styles.module.scss";
import Placeholder from "@tiptap/extension-placeholder";

const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
      }),
      Placeholder.configure({
        placeholder: `Type "." for commands.`,
        emptyEditorClass: "is-editor-empty",
        emptyNodeClass: "is-empty",
      }),
    ],
    content: "",
  });
  return (
    <>
      {editor && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "is-active" : ""}
          >
            bold
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive("italic") ? "is-active" : ""}
          >
            italic
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor.isActive("strike") ? "is-active" : ""}
          >
            strike
          </button>
        </BubbleMenu>
      )}
      <EditorContent editor={editor} className={styles.editor_content} />
      <EditorMenu editor={editor} />
    </>
  );
};

export default Editor;
