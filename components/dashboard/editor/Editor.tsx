import React from "react";
import { useEditor, EditorContent, FloatingMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import EditorMenu from "./Menu";
import Link from "@tiptap/extension-link";

const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
      }),
    ],
    content: "<p>Hello World! 🌎️</p>",
  });
  return (
    <>
      <EditorContent editor={editor} />
      <EditorMenu editor={editor} />
    </>
  );
};

export default Editor;
