"use client";

import { createContext, useState, ReactNode } from "react";

interface LanguageContextType {
  isEnglish: boolean;
  toggleLanguage: () => void;
}

// Create a LanguageContext with an undefined initial value
export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
}

// Provider component for LanguageContext
const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [isEnglish, setIsEnglish] = useState<boolean>(false);

  // Function to toggle the language state
  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  return (
    // Provide context value to the children components
    <LanguageContext.Provider value={{ isEnglish, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
