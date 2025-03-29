'use client';

import { createContext, useContext, useEffect, useState } from "react";

// Création du contexte
const ThemeLangContext = createContext();

export function ThemeLangProvider({ children }) {
  const [theme, setTheme] = useState("light");


 

  // Appliquer la classe au <html> pour le mode dark/light
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Fonction pour basculer le thème
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

 
  
  return (
    <ThemeLangContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeLangContext.Provider>
  );
}

// Hook personnalisé pour utiliser le contexte
export function useThemeLang() {
  return useContext(ThemeLangContext);
}
