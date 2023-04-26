import axios from "axios";

interface Post {
  title: string;
  content: string;
  cover_image?: string;
  post_id?: string;
  token: string;
}

const updatePost = async ({
  title,
  content,
  cover_image,
  post_id,
  token,
}: Post) => {
  try {
    const res = axios.put(
      "/api/blogs/posts/edit",
      { title, content, cover_image, post_id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error: any) {
    return error.response;
  }
};

export default updatePost;
