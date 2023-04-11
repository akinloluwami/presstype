import { ThemeContextProvider } from "@/contexts/ThemeProvider";
import "@/styles/globals.scss";
// import "../styles/tailwind.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}
