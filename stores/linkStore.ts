import { create } from "zustand";

interface LinkStore {
  link: string;
  setLink: (link: string) => void;
}

export const useLinkStore = create<LinkStore>((set) => ({
  link: "",
  setLink: (link) => set(() => ({ link })),
}));

export default useLinkStore;
