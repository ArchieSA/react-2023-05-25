'use client';

import React, { useContext, useCallback, useState } from 'react';

const context = React.createContext('desktop');
const setterContext = React.createContext(() => {});

export const useVersion = () => useContext(context);
export const useVersionSwitcher = () => useContext(setterContext);

export const VersionProvider = ({ children }) => {
const [version, setVersion] = useState(() => {
    return localStorage.getItem("version") || 'desktop';
  });

  const switchVersion = useCallback(() => {
    setVersion((val) => {
      const newVal = val === "desktop" ? "mobile" : "desktop";
      localStorage.setItem("version", newVal);

      return newVal;
    });
  }, []);

return (
    <context.Provider value={version}>
      <setterContext.Provider value={switchVersion}>
        {children}
      </setterContext.Provider>
    </context.Provider>
  );
}