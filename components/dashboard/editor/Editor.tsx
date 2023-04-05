import React from "react";
import { useEditor, EditorContent, FloatingMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import EditorMenu from "./Menu";

const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World! 🌎️</p>",
  });
  return (
    <>
      {editor && (
        <FloatingMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <EditorMenu editor={editor} />
        </FloatingMenu>
      )}
      <EditorContent editor={editor} />
    </>
  );
};

export default Editor;
