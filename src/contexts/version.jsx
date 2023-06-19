"use client";

import React, { useCallback, useContext, useState } from "react";

const context = React.createContext("desktop"); 
const setterContext = React.createContext(() => {}); 

export const useVersion = () => {
  return useContext(context);
};

export const useVersionSwitcher = () => {
  return useContext(setterContext);
};

export const VersionProvider = ({ children }) => {
  const [version, setVersion] = useState(() => {
    let initialVersion = "desktop";

    if (window) {
      initialVersion = localStorage.getItem("version") || "desktop";
    }

    return initialVersion;
  });

  const switchVersion = useCallback(() => {
    setVersion((currentVersion) => {
      const newVersion = currentVersion === "desktop" ? "mobile" : "desktop";
      localStorage.setItem("version", newVersion);

      return newVersion;
    });
  }, []);

  return (
    <context.Provider value={version}>
      <setterContext.Provider value={switchVersion}>
        {children}
      </setterContext.Provider>
    </context.Provider>
  );
};
