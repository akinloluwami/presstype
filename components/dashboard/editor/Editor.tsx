import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import EditorMenu from "./Menu";

const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World! 🌎️</p>",
  });
  return (
    <>
      <EditorMenu editor={editor} />
      <EditorContent editor={editor} />
    </>
  );
};

export default Editor;
