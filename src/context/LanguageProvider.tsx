import React, { useState, useEffect, useMemo, useCallback } from 'react';
import type { Language } from '../i18n';
import { translations, DEFAULT_LANGUAGE, AVAILABLE_LANGUAGES } from '../i18n';
import { LanguageContext } from './LanguageContext';

const STORAGE_KEY = 'ykais_language';

function getInitialLanguage(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'hi' || saved === 'mr') {
      return saved;
    }
  } catch {
    // In case localStorage is disabled or throws in restricted environments
  }
  return DEFAULT_LANGUAGE;
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = useCallback((newLang: Language) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const dictionary = useMemo(() => {
    return translations[language] || translations[DEFAULT_LANGUAGE];
  }, [language]);

  const t = useCallback(
    (key: string, fallback?: string): string => {
      const keys = key.split('.');

      // Attempt lookup in active language dictionary
      let currentVal: unknown = translations[language];
      for (const k of keys) {
        if (currentVal && typeof currentVal === 'object' && k in currentVal) {
          currentVal = (currentVal as Record<string, unknown>)[k];
        } else {
          currentVal = undefined;
          break;
        }
      }

      if (typeof currentVal === 'string') {
        return currentVal;
      }

      // Fallback to English dictionary
      let fallbackVal: unknown = translations[DEFAULT_LANGUAGE];
      for (const k of keys) {
        if (fallbackVal && typeof fallbackVal === 'object' && k in fallbackVal) {
          fallbackVal = (fallbackVal as Record<string, unknown>)[k];
        } else {
          fallbackVal = undefined;
          break;
        }
      }

      if (typeof fallbackVal === 'string') {
        return fallbackVal;
      }

      return fallback ?? key;
    },
    [language]
  );

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      availableLanguages: AVAILABLE_LANGUAGES,
      dictionary,
      t,
    }),
    [language, setLanguage, dictionary, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
