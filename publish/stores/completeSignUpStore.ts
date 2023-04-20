import { create } from "zustand";

type CompleteSignupStore = {
  step: number;
  title: string;
  subdomain: string;
  description: string;
  message: string;
  setStep: (step: number) => void;
  setTitle: (title: string) => void;
  setSubdomain: (subdomain: string) => void;
  setDescription: (description: string) => void;
  setMessage: (message: string) => void;
};

export const useCompleteSignupStore = create<CompleteSignupStore>((set) => ({
  step: 0,
  title: "",
  subdomain: "",
  description: "",
  message: "",
  setStep: (step: number) => set(() => ({ step })),
  setTitle: (title: string) => set(() => ({ title })),
  setSubdomain: (subdomain: string) => set(() => ({ subdomain })),
  setDescription: (description: string) => set(() => ({ description })),
  setMessage: (message: string) => set(() => ({ message })),
}));
