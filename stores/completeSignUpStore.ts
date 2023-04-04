import { create } from "zustand";

type CompleteSignupStore = {
  step: number;
  title: string;
  subdomain: string;
  about: string;
  setStep: (step: number) => void;
  setTitle: (title: string) => void;
  setSubdomain: (subdomain: string) => void;
  setAbout: (about: string) => void;
};

export const useCompleteSignupStore = create<CompleteSignupStore>((set) => ({
  step: 0,
  title: "",
  subdomain: "",
  about: "",
  setStep: (step: number) => set(() => ({ step })),
  setTitle: (title: string) => set(() => ({ title })),
  setSubdomain: (subdomain: string) => set(() => ({ subdomain })),
  setAbout: (about: string) => set(() => ({ about })),
}));
