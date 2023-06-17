'use client';
import React from 'react';

//created context
const context = React.createContext({
  version: '',
  setVersion: () => {},
}); // desktop || mobile

//custom hook return our context
export const useVersion = () => {
  return React.useContext(context);
};

// wrapper
export const VersionProvider = ({ children }) => {
  const [version, setVersion] = React.useState(
    localStorage.getItem('version') || 'desktop'
  );

  const switchVersion = React.useCallback(() => {
    setVersion(currentVersion => {
      const newVersion = currentVersion === 'desktop' ? 'mobile' : 'desktop';
      localStorage.setItem('version', newVersion);
      return newVersion;
    });
  }, []);

  //Q: почему не работает, вот такая запись context.Provider value={value} -> выдает undefined

  //   const value = React.useMemo(() => {
  //     version, switchVersion;
  //   }, [switchVersion, version]);

  return (
    <context.Provider value={{ version, setVersion: switchVersion }}>
      {children}
    </context.Provider>
  );
};
