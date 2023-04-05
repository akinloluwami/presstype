import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
const Editor = () => {
  return (
    <div contentEditable={true}>
      <code>Start with something...</code>
    </div>
  );
};

export default Editor;
