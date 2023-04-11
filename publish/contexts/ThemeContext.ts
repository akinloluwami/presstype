import { createContext, useContext } from "react";

interface ThemeContextInterface {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextInterface>({
  theme: "light",
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export type { ThemeContextInterface };

export default ThemeContext;
