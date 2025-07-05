// src/context/ProjectContext.jsx
'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const ProjectContext = createContext();

export function ContextProvider({ children }) {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  return (
    <ProjectContext.Provider value={{ language, setLanguage }}>
      {children}
    </ProjectContext.Provider>
  );
}

export const useProjectContext = () => useContext(ProjectContext);
