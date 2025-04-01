import React, { createContext, useContext, useEffect, useState } from 'react';
import i18n from '../i18n';
import Cookies from 'js-cookie';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(Cookies.get('i18next') || 'ar'); // Default to 'en'

  useEffect(() => {
    // Change language in i18n
    i18n.changeLanguage(language);

    // Change the direction based on the language
    if (language === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl'); // Set the direction to RTL
    } else {
      document.documentElement.setAttribute('dir', 'ltr'); // Set the direction to LTR
    }

    // Ensure i18n is updated with the default or stored language on initialization
  }, [language]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    Cookies.set('i18next', lang, { expires: 7 }); // Store for 7 days
    setLanguage(lang);

    // Refresh the page after changing language
    window.location.reload();
  };
  const fontClass = language === 'ar' ? '!font-tajwal' : "!font-poppins";

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
    <div className={fontClass}>

      {children}
    </div>
    </LanguageContext.Provider>
  );
};
