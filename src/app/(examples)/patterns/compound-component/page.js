"use client";

import React, { useCallback, useContext, useState } from "react";
import { createPortal } from "react-dom";

const MenuContext = React.createContext();
const MenuSetterContext = React.createContext();

function useIsActiveTab(tab) {
  const activeTab = useContext(MenuContext);

  return activeTab === tab;
}

function useToggleGroup(groupName) {
  const toggleGroup = useContext(MenuSetterContext);

  return toggleGroup ? toggleGroup.bind(null, groupName) : undefined;
}

function Menu({ children, title }) {
  const isActive = useIsActiveTab(title);
  const toggleGroup = useToggleGroup(title);

  const [activeGroup, setActiveGroup] = useState();
  const toggleActiveGroup = useCallback((groupName) => {
    setActiveGroup((activeGroup) =>
      activeGroup === groupName ? undefined : groupName
    );
  }, []);

  return (
    <MenuSetterContext.Provider value={toggleActiveGroup}>
      <MenuContext.Provider value={activeGroup}>
        <div>
          {!title ? (
            children
          ) : (
            <>
              <button
                onClick={() => {
                  if (isActive) {
                    setActiveGroup(undefined);
                  }
                  toggleGroup();
                }}
              >
                {title}
              </button>
              {isActive && <div>{children}</div>}
            </>
          )}
        </div>
      </MenuContext.Provider>
    </MenuSetterContext.Provider>
  );
}

Menu.MenuItem = function MenuItem({ title }) {
  return (
    <div>
      <div>{title}</div>
    </div>
  );
};

Menu.BrandMenuItem = function MenuItem({ title }) {
  return (
    <div>
      <div>With Branding{title}</div>
    </div>
  );
};

Menu.BrandMenuGroup = function MenuGroup({ children, title }) {
  const isActive = useIsActiveTab(title);
  const toggleGroup = useToggleGroup(title);
  return (
    <div>
      <button onClick={toggleGroup}>With Branding{title}</button>
      {isActive && <div>{children}</div>}
    </div>
  );
};

export default function CompoundComponent() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>OpenModal</button>
      {isVisible &&
        createPortal(
          <div>{isVisible ? "Yes" : "NO"}</div>,
          document.getElementById("modalContainer")
        )}
      <Menu>
        <Menu.MenuItem title="Home" />
        <Menu title="Restaurants">
          <Menu.MenuItem title="Hello" />
          <Menu.MenuItem title="Students" />
        </Menu>
        <Menu title="Libraries">
          <Menu title="State Managers">
            <Menu.MenuItem title="Redux" />
            <Menu.MenuItem title="Mobx" />
            <Menu title="Restaurants">
              <Menu.MenuItem title="Hello" />
              <Menu.MenuItem title="Students" />
              <Menu title="Courses">
                <Menu.MenuItem title="React" />
                <Menu.MenuItem title="TS" />
                <Menu.MenuItem title="Patterns" />
                <Menu title="Others">
                  <Menu.BrandMenuItem title="Rxjs" />
                  <Menu.MenuItem title="Apollo" />
                </Menu>
              </Menu>
            </Menu>
          </Menu>
          <Menu title="Others">
            <Menu.BrandMenuItem title="Rxjs" />
            <Menu.MenuItem title="Apollo" />
          </Menu>
        </Menu>
        <Menu title="Courses">
          <Menu.MenuItem title="React" />
          <Menu.MenuItem title="TS" />
          <Menu.MenuItem title="Patterns" />
        </Menu>
      </Menu>
    </div>
  );
}
