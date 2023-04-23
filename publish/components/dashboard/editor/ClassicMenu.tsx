import { useCallback, useState, useEffect, useRef } from "react";
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
import { Listbox, Tab } from "@headlessui/react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { FaArrowDown } from "react-icons/fa";

const ClassicMenu = ({ editor }: any) => {
  const textTools = [
    {
      name: "Normal text",
      action: () => editor?.chain().focus().setParagraph().run(),
      icon: <MdOutlineTextFields />,
    },
    {
      name: "Heading 1",
      action: () => {
        editor.chain().focus().toggleHeading({ level: 1 }).run();
      },
      icon: "H1",
    },
    {
      name: "Heading 2",
      action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      icon: "H2",
    },
    {
      name: "Heading 3",
      action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      icon: "H3",
    },
  ];
  const listboxButtonRef = useRef(null);

  const [uploading, setUploading] = useState(false);
  const [url, setUrl] = useState("");
  const [selectedTool, setSelectedTool] = useState(textTools[0]);
  const [cdnImage, setCdnImage] = useState<any>();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    selectedTool.action();
  }, [selectedTool]);

  if (!editor) {
    return null;
  }

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

  const addCdnImage = async () => {
    toast.loading("Uploading image...");
    setUploading(true);
    const formData = new FormData();
    formData.append("file", cdnImage);
    const res = await axios.post(
      "/api/blogs/upload-image?folder=post_images",
      formData
    );
    editor.chain().focus().setImage({ src: res.data.url }).run();
    handleCloseModal();
    setCdnImage(null);
    setUploading(false);
    toast.dismiss();
  };

  const tools = [
    {
      name: "Bold",
      action: () => editor.chain().focus().toggleBold().run(),
      icon: <MdFormatBold />,
    },
    {
      name: "Italic",
      action: () => editor.chain().focus().toggleItalic().run(),
      icon: <MdFormatItalic />,
    },
    {
      name: "Strike",
      action: () => editor.chain().focus().toggleStrike().run(),
      icon: <MdStrikethroughS />,
    },
    {
      name: "Code",
      action: () => editor.chain().focus().toggleCode().run(),
      icon: <BsCode />,
    },
    {
      name: "Text",
      action: () => editor.chain().focus().setParagraph().run(),
      icon: <MdOutlineTextFields />,
    },
    {
      name: "Image",
      action: handleOpenModal,
      icon: <BsImage />,
    },
    {
      name: "Bullet list",
      action: () => editor.chain().focus().toggleBulletList().run(),
      icon: <MdFormatListBulleted />,
    },
    {
      name: "Numbered list",
      action: () => editor.chain().focus().toggleOrderedList().run(),
      icon: <MdFormatListNumbered />,
    },
    {
      name: "Code block",
      action: () => editor.chain().focus().toggleCodeBlock().run(),
      icon: <BiCodeBlock />,
    },
    {
      name: "Quote",
      action: () => editor.chain().focus().toggleBlockquote().run(),
      icon: <MdFormatQuote />,
    },
    {
      name: "Divider",
      action: () => editor.chain().focus().setHorizontalRule().run(),
      icon: <TbDivide />,
    },
  ];

  return (
    <>
      <Toaster />
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
                <input
                  type="file"
                  onChange={(e: any) => {
                    setCdnImage(e.target.files[0]);
                  }}
                  disabled={uploading}
                />
                <button
                  className={styles.add_btn}
                  onClick={() => {
                    addCdnImage();
                  }}
                  disabled={uploading}
                >
                  Upload
                </button>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </Modal>
      )}

      <div className={styles.editor_menu_classic}>
        <div className={styles.editor_text_tools}>
          <Listbox value={selectedTool} onChange={setSelectedTool}>
            <Listbox.Button
              className={styles.btn_select_one}
              ref={listboxButtonRef}
            >
              {selectedTool.name}
              <FaArrowDown />
            </Listbox.Button>
            <Listbox.Options className={styles.options}>
              {textTools.map((tool) => (
                <Listbox.Option
                  className={({ active }) =>
                    `${styles.btn_select} ${active && styles.active}`
                  }
                  key={tool.name}
                  value={tool}
                >
                  {tool.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
        </div>
        <div className={styles.editor_tools}>
          {tools.map((tool) => (
            <button
              className={
                editor.isActive(tool.name.toLowerCase()) && styles.active
              }
              key={tool.name}
              onClick={tool.action}
            >
              {tool.icon}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ClassicMenu;
