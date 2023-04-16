import { create } from "zustand";

interface NewPostStore {
  title: string;
  content: string;
  cover_image?: string;
  setTitle: (title: string) => void;
  setContent: (content: string) => void;
  setCoverImage?: (cover_image: string) => void;
}

export const useNewPostStore = create<NewPostStore>((set) => ({
  title: "",
  content: "<p>So it begins...</p>",
  cover_image: "",
  setTitle: (title: string) => set(() => ({ title })),
  setContent: (content: string) => set(() => ({ content })),
  setCoverImage: (cover_image: string) => set(() => ({ cover_image })),
}));
