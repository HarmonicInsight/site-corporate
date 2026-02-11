'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Locale } from './translations';

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  locale: 'ja',
  setLocale: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('ja');

  useEffect(() => {
    const saved = localStorage.getItem('locale') as Locale | null;
    if (saved && ['ja', 'en', 'zh'].includes(saved)) {
      setLocaleState(saved);
    } else {
      const browserLang = navigator.language.slice(0, 2);
      if (browserLang === 'zh') setLocaleState('zh');
      else if (browserLang === 'en') setLocaleState('en');
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
    document.documentElement.lang = newLocale === 'zh' ? 'zh-CN' : newLocale;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useT() {
  const { locale } = useLanguage();
  return {
    locale,
    t: (section: string, key: string): string => {
      const { t: tFn } = require('./translations');
      return tFn(section, key, locale);
    },
    tArray: (section: string, key: string): string[] => {
      const { tArray: tArrayFn } = require('./translations');
      return tArrayFn(section, key, locale);
    },
  };
}
