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
import { Tab } from "@headlessui/react";

const EditorMenu = ({ editor }: any) => {
  if (!editor) {
    return null;
  }
  const [url, setUrl] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [cdnImage, setCdnImage] = useState("");

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const addImage = () => {
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
    setUrl("");
    handleCloseModal();
  };

  const addCdnImage = () => {
    if (cdnImage) {
      editor.chain().focus().setImage({ src: cdnImage }).run();
    }
    setCdnImage("");
    handleCloseModal();
  };

  const tools = [
    {
      node: (
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active" : ""}
        >
          <MdFormatBold /> Bold
        </button>
      ),
      name: "Bold",
    },
    {
      node: (
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
        >
          <MdFormatItalic /> Italic
        </button>
      ),
      name: "Italic",
    },
    {
      node: (
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is-active" : ""}
        >
          <MdStrikethroughS /> Strike
        </button>
      ),
      name: "Strike",
    },
    {
      node: (
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          className={editor.isActive("code") ? "is-active" : ""}
        >
          <BsCode /> Code
        </button>
      ),
      name: "Code",
    },
    {
      node: (
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive("paragraph") ? "is-active" : ""}
        >
          <MdOutlineTextFields /> Text
        </button>
      ),
      name: "Text",
    },
    {
      node: (
        <button onClick={handleOpenModal}>
          <BsImage /> Image
        </button>
      ),
      name: "Image",
    },
    {
      node: (
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
      ),
      name: "Heading 1",
    },
    {
      node: (
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
      ),
      name: "Heading 2",
    },
    {
      node: (
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
      ),
      name: "Heading 3",
    },
    {
      node: (
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is-active" : ""}
        >
          <MdFormatListBulleted /> Bullet list
        </button>
      ),
      name: "Bullet list",
    },
    {
      node: (
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "is-active" : ""}
        >
          <MdFormatListNumbered /> Numbered list
        </button>
      ),
      name: "Numbered list",
    },
    {
      node: (
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive("codeBlock") ? "is-active" : ""}
        >
          <BiCodeBlock /> Code block
        </button>
      ),
      name: "Code block",
    },
    {
      node: (
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive("blockquote") ? "is-active" : ""}
        >
          <MdFormatQuote /> Quote
        </button>
      ),
      name: "Quote",
    },
    {
      node: (
        <button
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          <TbDivide /> Divider
        </button>
      ),
      name: "Divider",
    },
  ];

  return (
    <>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <h1>Add an image</h1>
          <Tab.Group>
            <Tab.List>
              <Tab>URL</Tab>
              <Tab>Upload</Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <input type="text" onChange={(e) => setUrl(e.target.value)} />
                <button
                  className={styles.add_btn}
                  onClick={() => {
                    addImage();
                  }}
                >
                  Add hyperlink
                </button>
              </Tab.Panel>
              <Tab.Panel>
                <input type="file" onChange={(e) => setUrl(e.target.value)} />
                <button
                  className={styles.add_btn}
                  onClick={() => {
                    addCdnImage();
                  }}
                >
                  Upload
                </button>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </Modal>
      )}
      <div className={styles.editor_menu}>
        {tools.map((tool) => (
          <div className={styles.btn_container} key={tool.name}>
            {tool.node}
          </div>
        ))}
      </div>
    </>
  );
};

export default EditorMenu;
