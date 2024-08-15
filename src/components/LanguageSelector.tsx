"use client";

import { FC, useState } from "react";
import useLanguage from "@/hooks/useLanguage";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LanguageSelector: FC = () => {
  const { isEnglish, toggleLanguage } = useLanguage();

  const [activeLanguage, setActiveLanguage] = useState<string>(
    isEnglish ? "en" : "es"
  );

  const handleLanguage = (language: string) => {
    if ((language === "en" && !isEnglish) || (language === "es" && isEnglish)) {
      toggleLanguage();
      setActiveLanguage(language);
    }
  };

  return (
    <Select value={activeLanguage} onValueChange={handleLanguage}>
      <SelectTrigger className="w-[180px]">
        <SelectValue defaultValue="EN" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="es">{isEnglish ? "SP" : "ESP"}</SelectItem>
          <SelectItem value="en">{isEnglish ? "EN" : "ING"}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;
