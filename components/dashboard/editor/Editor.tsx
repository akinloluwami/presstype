import React from "react";
import { useEditor, EditorContent, FloatingMenu } from "@tiptap/react";
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
      <EditorContent editor={editor} className={styles.editor_content} />
      <EditorMenu editor={editor} />
    </>
  );
};

export default Editor;
