import { useEffect, useState } from "react";
import useSessionStorage from "./useSessionStorage";
import { Theme } from "../types/types";

const useTheme = () => {
  const [theme, storeTheme] = useSessionStorage<Theme>("theme");
  const [systemTheme, setSystemTheme] = useState<Theme>("light");

  function toggleTheme() {
    const nextTheme = () => {
      if (theme) {
        return theme === "light" ? "dark" : "light";
      }

      return systemTheme === "light" ? "dark" : "light";
    };

    const newTheme = nextTheme();

    storeTheme(newTheme);
  }

  function setTheme(mode: Theme = "light") {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
      return;
    }

    document.documentElement.classList.remove("dark");
  }

  useEffect(() => {
    if (theme) return setTheme(theme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemTheme(mediaQuery.matches ? "dark" : "light");

    mediaQuery.addEventListener("change", (e) => {
      const newTheme = e.matches ? "dark" : "light";

      setTheme(newTheme);
      setSystemTheme(newTheme);
    });

    return () => {
      mediaQuery.removeEventListener("change", () => {});
    };
  }, [theme]);

  return {
    toggleTheme,
    isDark: theme === "dark" || (theme === undefined && systemTheme === "dark"),
    theme,
  };
};

export default useTheme;
