import { create } from "zustand";

interface TokenStore {
  token: string;
  setToken: (token: string) => void;
}

export const useTokenStore = create<TokenStore>((set) => ({
  token:
    typeof window !== "undefined" ? localStorage.getItem("token") || "" : "",
  setToken: (token: string) => set(() => ({ token })),
}));
