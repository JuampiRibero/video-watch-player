import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";

export default function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("LanguageContext must be used within a LanguageProvider");
  }

  return context;
}
