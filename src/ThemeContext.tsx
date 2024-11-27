import React, { createContext, useContext, useState, ReactNode } from "react";
import { themes } from "./theme"; // Ajusta la ruta según tu estructura

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  colors: typeof themes.light; // Asegúrate de que esto coincida con tu archivo `theme.ts`
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem("theme") as Theme) || "light"
  );

  // Detecta si el sistema está en modo oscuro o claro
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  // Selecciona el tema actual
  const colors = themes[theme === "system" ? systemTheme : theme];

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme === "system" ? systemTheme : newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: changeTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};
