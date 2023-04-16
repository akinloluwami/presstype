import { useState, useEffect } from "react";
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import EditorMenu from "./Menu";
import Link from "@tiptap/extension-link";
import styles from "./styles.module.scss";
import Placeholder from "@tiptap/extension-placeholder";
import TextSelectMenu from "./TextSelectMenu";
import LinkSelectMenu from "./LinkSelectMenu";
import Image from "@tiptap/extension-image";
import ImageSelectMenu from "./ImageSelectMenu";
import Code from "@tiptap/extension-code";
import Highlight from "@tiptap/extension-highlight";
import { useNewPostStore } from "@/stores/newPostStore";
import commands from "@/custom/commands";
import ClassicMenu from "./ClassicMenu";
// import Suggestion from "@tiptap/suggestion";

const Editor = () => {
  const { content, setContent } = useNewPostStore();
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
      }),
      Image,
      Placeholder.configure({
        placeholder: `Type "/" for commands.`,
        emptyEditorClass: "is-editor-empty",
        emptyNodeClass: "is-empty",
      }),
      Code,
      Highlight,
    ],
    content: content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });
  const [showEditorMenu, setShowEditorMenu] = useState(false);

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
      <ClassicMenu editor={editor} />
      <EditorContent editor={editor} className={styles.editor_content} />
      {/* <EditorMenu editor={editor} /> */}
    </>
  );
};

export default Editor;
