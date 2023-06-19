"use client";

import React, { useCallback, useContext, useState } from "react";

export const VIEW_MODES = {
  desktop: "desktop",
  mobile: "mobile",
};

const MODE_KEY = 'view-mode'

const VIEW_MODE_KEYS = Object.keys(VIEW_MODES)

const DEFAULT_VIEW_MODE = VIEW_MODES.desktop

const context = React.createContext(DEFAULT_VIEW_MODE);
const controllerContext = React.createContext((state = {}) => state);

export const ViewModeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => typeof window !== 'undefined' && localStorage.getItem(MODE_KEY) || DEFAULT_VIEW_MODE)

  const changeViewMode = useCallback(() => {
    setMode((currentViewMode) => {
      const index = VIEW_MODE_KEYS.indexOf(currentViewMode) + 1
      const result = VIEW_MODES[VIEW_MODE_KEYS[index >= VIEW_MODE_KEYS.length ? 0 : index]]

      localStorage.setItem(MODE_KEY, result);

      return result
    })
  }, [])

  return (
    <context.Provider value={mode}>
      <controllerContext.Provider value={changeViewMode}>
        {children}
      </controllerContext.Provider>
    </context.Provider>
  );
};

export const useViewMode = () => useContext(context)
export const useViewModeController = () => useContext(controllerContext)

export const isMobileMode = (vmode) => vmode === VIEW_MODES.mobile
