"use client";

import React, {
  useCallback,
  useContext,
  useState,
} from "react";

const DEFAULT_VALUE = false;

const context = React.createContext(DEFAULT_VALUE);
const setterContext = React.createContext(() => {});

export const useIsMobile = () => {
  return useContext(context);
};

export const useMobileVersionSwitcher = () => {
  return useContext(setterContext);
};

export const MobileVersionProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(DEFAULT_VALUE);

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
