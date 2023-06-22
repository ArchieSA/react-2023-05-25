"use client";

import React, {
  useCallback,
  useContext,
  useLayoutEffect,
  useState,
} from "react";

const defaultValue = false;

const context = React.createContext(defaultValue);
const setterContext = React.createContext(() => {});

export const useIsMobile = () => {
  return useContext(context);
};

export const useMobileVersionSwitcher = () => {
  return useContext(setterContext);
};

export const MobileVersionProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(defaultValue);

  const switchVersion = useCallback(() => {
    setIsMobile((isMobile) => {
      const newValue = !isMobile;

      return newValue;
    });
  }, []);

  return (
    <context.Provider value={isMobile}>
      <setterContext.Provider value={switchVersion}>
        {children}
      </setterContext.Provider>
    </context.Provider>
  );
};
