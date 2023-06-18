'use client';

import React, { useCallback, useContext, useState } from "react";
import { APP_VIEW_VERSION } from '@/utils/constants'

const context = React.createContext(APP_VIEW_VERSION.desktop); // 'desktop' | 'mobile'
const switcherContext = React.createContext(() => {})

export const useVerion = () => {
  return useContext(context);
};

export const useVersionSwitcher = () => {
  return useContext(switcherContext);
};

export const VersionProvider = ({ children }) => {
  const [version, setVersion] = useState(() => {
    let initialVersion = APP_VIEW_VERSION.desktop;

    if (typeof window !== 'undefined') {
      initialVersion = localStorage.getItem('version') || APP_VIEW_VERSION.desktop;
    }

    return initialVersion;
  })

  const switchVersion = useCallback(() => {
    setVersion((currentVersion) => {
      const newVersion = currentVersion === APP_VIEW_VERSION.desktop ? APP_VIEW_VERSION.mobile : APP_VIEW_VERSION.desktop;
      localStorage.setItem('version', newVersion);
      return newVersion;
    });
  }, []);

  return (
    <context.Provider value={version}>
      <switcherContext.Provider value={switchVersion}>
        {children}
      </switcherContext.Provider>
    </context.Provider>
  );
};
