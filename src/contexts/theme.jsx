"use client";

import React, {
  useCallback,
  useContext,
  useLayoutEffect,
  useState,
} from "react";

const context = React.createContext("default"); // default || alternative
const setterContext = React.createContext(() => {}); // default || alternative

export const useTheme = () => {
  return useContext(context);
};

export const useThemeSwitcher = () => {
  return useContext(setterContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("default");

  const switchTheme = useCallback(() => {
    setTheme((currentTheme) => {
      const newTheme = currentTheme === "default" ? "alternative" : "default";

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
