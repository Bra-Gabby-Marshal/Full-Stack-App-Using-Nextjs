"use client";

import { createContext, useState, useEffect, useMemo } from "react";

export const ThemeContext = createContext({
  mode: "dark",
  toggle: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setMode(savedTheme);
    }
  }, []);

  const toggle = () => {
    setMode((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      return next;
    });
  };

  const value = useMemo(() => ({ mode, toggle }), [mode]);

  return (
    <ThemeContext.Provider value={value}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
