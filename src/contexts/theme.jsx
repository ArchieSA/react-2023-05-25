"use client";

import React, { useCallback, useContext, useState } from "react";

const THEME_KEY = 'theme'

const context = React.createContext("default"); // default || alternative
const setterContext = React.createContext((state = {}) => state); // default || alternative

export const useTheme = () => {
  return useContext(context);
};

export const useThemeSwitcher = () => {
  return useContext(setterContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    let initialTheme = "default";

    if (typeof window !== 'undefined') {
      initialTheme = localStorage.getItem(THEME_KEY) || "default";
    }

    return initialTheme;
  });

  const switchTheme = useCallback(() => {
    setTheme((currentTheme) => {
      const newTheme = currentTheme === "default" ? "alternative" : "default";
      localStorage.setItem(THEME_KEY, newTheme);

      return newTheme;
    });
  }, []);

  return (
    <context.Provider value={theme}>
      <setterContext.Provider value={switchTheme}>
        {children}
      </setterContext.Provider>
    </context.Provider>
  );
};
