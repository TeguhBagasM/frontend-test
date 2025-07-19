import { useState, useEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState("system");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "system";
    setTheme(savedTheme);
    applyTheme(savedTheme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const handleSystemThemeChange = (e) => {
    if (theme === "system") {
      setIsDark(e.matches);
      document.documentElement.classList.toggle("dark", e.matches);
    }
  };

  const applyTheme = (themeValue) => {
    if (themeValue === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else if (themeValue === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      // system
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(systemDark);
      document.documentElement.classList.toggle("dark", systemDark);
    }
  };

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  return {
    theme,
    isDark,
    setTheme: changeTheme,
  };
};
