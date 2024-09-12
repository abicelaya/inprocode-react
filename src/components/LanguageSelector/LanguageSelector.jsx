import React from 'react';
import { useTranslation } from 'react-i18next';

const flagUrls = {
  en: '/src/assets/english-flag.png', 
  es: '/src/assets/spanish-flag.png',  
  ca: '/src/assets/catalan-flag.png',  
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

