import { useCallback, useState, useEffect } from "react";
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
import TextSelectMenu from "./TextSelectMenu";
import LinkSelectMenu from "./LinkSelectMenu";
import Image from "@tiptap/extension-image";
import ImageSelectMenu from "./ImageSelectMenu";

const Editor = () => {
  const [content, setContent] = useState("");
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
      }),
      Image,
      Placeholder.configure({
        placeholder: `Type "." for commands.`,
        emptyEditorClass: "is-editor-empty",
        emptyNodeClass: "is-empty",
      }),
    ],
    content: content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });
  const [showEditorMenu, setShowEditorMenu] = useState(false);
  useEffect(() => {
    console.log(editor?.getHTML());
  }, [editor]);

  return (
    <>
      {editor && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          {editor.isActive("link") ? (
            <LinkSelectMenu editor={editor} />
          ) : editor.isActive("image") ? (
            <ImageSelectMenu editor={editor} />
          ) : (
            <TextSelectMenu editor={editor} />
          )}
        </BubbleMenu>
      )}
      <EditorContent editor={editor} className={styles.editor_content} />
      <EditorMenu editor={editor} />
    </>
  );
};

export default Editor;
