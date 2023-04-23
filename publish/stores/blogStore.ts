import { create } from "zustand";

interface BlogStore {
  blogId: string;
  setBlogId: (blogId: string) => void;
}

export const useBlogStore = create<BlogStore>((set) => ({
  blogId: "",
  setBlogId: (blogId) => set({ blogId }),
}));
