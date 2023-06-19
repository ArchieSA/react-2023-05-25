"use client";

import React, { useCallback, useContext, useState } from "react";

const context = React.createContext("mobile"); // mobile || desktop
const setterContext = React.createContext(() => {}); // mobile || desktop

export const useView = () => {
  return useContext(context);
};

export const useViewSwitcher = () => {
  return useContext(setterContext);
};

export const ViewProvider = ({ children }) => {
  const [view, setView] = useState(() => {
    let initialView = "mobile";

    if (window) {
      initialView = localStorage.getItem("view") || "mobile";
    }

    return initialView;
  });

  const switchView = useCallback(() => {
    setView((currentView) => {
      const newView = currentView === "mobile" ? "desktop" : "mobile";
      localStorage.setItem("view", newView);

      return newView;
    });
  }, []);

  return (
    <context.Provider value={view}>
      <setterContext.Provider value={switchView}>
        {children}
      </setterContext.Provider>
    </context.Provider>
  );
};
