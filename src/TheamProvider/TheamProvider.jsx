import React, { createContext, useEffect, useState } from 'react';

export const TheamContext = createContext();

const TheamProvider = ({ children }) => {
  const [thame, setTheme] = useState(localStorage.getItem('thame') || 'light');

  useEffect(() => {
    const htmlElement = document.documentElement;

    if (thame === 'dark') {

      htmlElement.classList.add('dark'); 

      htmlElement.setAttribute('data-theme', 'dark'); 
    } 
    
    else {
      htmlElement.classList.remove('dark');
      htmlElement.setAttribute('data-theme', 'light');
    }

    localStorage.setItem('theme', thame);
  }, [thame]);




  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeInfo = {
    thame,
    toggleTheme,
  };

  return (
    <TheamContext.Provider value={themeInfo}>
      {children}
    </TheamContext.Provider>
  );
};

export default TheamProvider;
