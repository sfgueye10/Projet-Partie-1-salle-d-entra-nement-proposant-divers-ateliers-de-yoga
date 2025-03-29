'use client';

import { useThemeLang } from '../app/context/ThemeLangContext';

export default function ToggleButtons() {
    const { theme, toggleTheme, language } = useThemeLang();
    console.log("Langue actuelle:", language);  // Vérifie si la langue change ici
  
    return (
      <div className="flex gap-4 p-2">
        <button
          className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-md"
          onClick={toggleTheme}
        >
          {theme === "light" ? "🌙 Mode Sombre" : "☀️ Mode Clair"}
        </button>
  
    
      </div>
    );
  }
  
