import { create } from "zustand";

type CompleteSignupStore = {
  step: number;
  title: string;
  subdomain: string;
  description: string;
  author_name: string;
  author_bio: string;
  setAuthorName: (author_name: string) => void;
  message: string;
  setStep: (step: number) => void;
  setTitle: (title: string) => void;
  setSubdomain: (subdomain: string) => void;
  setDescription: (description: string) => void;
  setAuthorBio: (author_bio: string) => void;
  setMessage: (message: string) => void;
};

export const useCompleteSignupStore = create<CompleteSignupStore>((set) => ({
  step: 0,
  title: "",
  subdomain: "",
  description: "",
  author_name: "",
  author_bio: "",
  message: "",
  setStep: (step: number) => set(() => ({ step })),
  setTitle: (title: string) => set(() => ({ title })),
  setSubdomain: (subdomain: string) => set(() => ({ subdomain })),
  setDescription: (description: string) => set(() => ({ description })),
  setAuthorName: (author_name: string) => set(() => ({ author_name })),
  setAuthorBio: (author_bio: string) => set(() => ({ author_bio })),
  setMessage: (message: string) => set(() => ({ message })),
}));
