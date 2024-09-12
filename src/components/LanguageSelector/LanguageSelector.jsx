import React from 'react';
import { useTranslation } from 'react-i18next';
import englishFlag from "../../assets/english-flag.png"
import spanishFlag from "../../assets/spanish-flag.png"
import catalanFlag from "../../assets/catalan-flag.png"

const flagUrls = {
  en: englishFlag, 
  es: spanishFlag,  
  ca: catalanFlag,  
};

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem('i18nextLng', language);
  };

  return (
    <div className="flex gap-2 mt-4">
      {Object.keys(flagUrls).map((lang) => (
        <img
          key={lang}
          src={flagUrls[lang]}
          alt={lang}
          className={`w-8 h-8 rounded-full cursor-pointer ${
            i18n.language === lang ? 'border border-black border-opacity-50' : ''
          }`}
          onClick={() => handleLanguageChange(lang)}
        />
      ))}
    </div>
  );
};

export default LanguageSelector;

