"use client"

import React, { useCallback, useContext, useMemo, useState } from "react";

const VERSION_ENUM = {
  DESKTOP: 'desktop',
  MOBILE: 'mobile'
}

const isClient = () => typeof window !== undefined;

const getVersionFromStorage = () => {
  let current = VERSION_ENUM.DESKTOP;

  if(isClient()) {
    current = localStorage.getItem('version') ?? VERSION_ENUM.DESKTOP
  }

  return current;
}

const setVersionToStorage = (vers) => localStorage.setItem('version', vers);

const context = React.createContext();
const toggleContext = React.createContext();

export const useVersion = () => useContext(context);

export const useToggleVersion = () => useContext(toggleContext);

export const VersionContext = ({ children }) => {
  const [version, setVersion] = useState(() => {
    return getVersionFromStorage();
  });

  const toggleVersion = useCallback(() => {
    return setVersion(
      (current) => {
        const version = current === VERSION_ENUM.DESKTOP 
        ? VERSION_ENUM.MOBILE 
        : VERSION_ENUM.DESKTOP

        setVersionToStorage(version)

        return version;
      }
    )
  }, []);

  const value = useMemo(() => ({
    isMobile: version === VERSION_ENUM.MOBILE,
    version,
  }), [version]); 

  return (
    <context.Provider value={value}>
      <toggleContext.Provider value={toggleVersion}>
        {children}
      </toggleContext.Provider>
    </context.Provider>
  )    
}