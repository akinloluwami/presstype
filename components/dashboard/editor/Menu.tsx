import { useCallback, useState } from "react";
import styles from "./styles.module.scss";
import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdFormatQuote,
  MdOutlineTextFields,
  MdStrikethroughS,
} from "react-icons/md";
import { BiCodeBlock } from "react-icons/bi";
import { BsCode, BsImage } from "react-icons/bs";
import { TbDivide } from "react-icons/tb";
import Modal from "@/components/elements/modal/Modal";

const EditorMenu = ({ editor }: any) => {
  if (!editor) {
    return null;
  }
  const [url, setUrl] = useState("");

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const addImage = useCallback(() => {
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
    setUrl("");
    handleCloseModal();
  }, [editor]);

  return (
    <>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <h1>Add an image</h1>
          <input type="text" onChange={(e) => setUrl(e.target.value)} />
          <button className={styles.add_btn} onClick={addImage}>
            Add hyperlink
          </button>
        </Modal>
      )}
      <div className={styles.editor_menu}>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active" : ""}
        >
          <MdFormatBold /> Bold
        </button>

        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
        >
          <MdFormatItalic /> Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is-active" : ""}
        >
          <MdStrikethroughS /> Strike
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          className={editor.isActive("code") ? "is-active" : ""}
        >
          <BsCode /> Code
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive("paragraph") ? "is-active" : ""}
        >
          <MdOutlineTextFields /> Text
        </button>

        <button onClick={handleOpenModal}>
          <BsImage /> Image
        </button>

        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 }) ? "is-active" : ""
          }
        >
          Heading 1
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 }) ? "is-active" : ""
          }
        >
          Heading 2
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive("heading", { level: 3 }) ? "is-active" : ""
          }
        >
          Heading 3
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is-active" : ""}
        >
          <MdFormatListBulleted /> Bullet list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "is-active" : ""}
        >
          <MdFormatListNumbered /> Numbered list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive("codeBlock") ? "is-active" : ""}
        >
          <BiCodeBlock /> Code block
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive("blockquote") ? "is-active" : ""}
        >
          <MdFormatQuote /> Quote
        </button>
        <button
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          <TbDivide /> Divider
        </button>
      </div>
    </>
  );
};

export default EditorMenu;
