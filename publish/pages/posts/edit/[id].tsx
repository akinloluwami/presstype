import ClassicMenu from "@/components/dashboard/editor/ClassicMenu";
import Editor from "@/components/dashboard/editor/Editor";
import ImageSelectMenu from "@/components/dashboard/editor/ImageSelectMenu";
import LinkSelectMenu from "@/components/dashboard/editor/LinkSelectMenu";
import TextSelectMenu from "@/components/dashboard/editor/TextSelectMenu";
import NewPostHeader from "@/components/dashboard/posts/NewPostHeader/NewPostHeader";
import DashboardLayout from "@/layouts/dashboard_layout";
import { useBlogStore } from "@/stores/blogStore";
import { useNewPostStore } from "@/stores/newPostStore";
import { useTokenStore } from "@/stores/tokenStore";
import Code from "@tiptap/extension-code";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import { BubbleMenu, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const EditPost = () => {
  const router = useRouter();

  const [post, setPost] = useState<{ content: string; title: string }>({
    title: "",
    content: "",
  });
  const { token } = useTokenStore();
  const { blogId } = useBlogStore();

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
      }),
      Image,
      Code,
      Highlight,
    ],
    content: post?.content,
    autofocus: true,
    editable: true,
    onUpdate: ({ editor }) => {
      setPost({ ...post, content: editor.getHTML() });
    },
  });

  useEffect(() => {
    if (!router.query.id) {
      return;
    }
    (async () => {
      const res = await axios.get(
        `/api/blogs/posts/get-one?id=${router?.query?.id}&blogId=${blogId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPost(res.data);
    })();
  }, [router.query.id, blogId, token]);

  useEffect(() => {
    editor?.commands.setContent(post?.content || "");
  }, [editor, post?.content]);

  return (
    <>
      <DashboardLayout>
        <button onClick={() => console.log(post.content)}>Update Post</button>
        <input
          type="text"
          className={`w-full text-4xl bg-transparent mb-5 outline-none mt-2`}
          placeholder="Article title"
          value={post?.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <ClassicMenu editor={editor} />

        {post.content && (
          <EditorContent editor={editor} className="editor-content" />
        )}

        <div className="">
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
        </div>
      </DashboardLayout>
    </>
  );
};

export default EditPost;
