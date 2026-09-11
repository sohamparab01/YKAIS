import { createContext } from 'react';
import type { Language, LanguageOption, TranslationDictionary } from '../i18n';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  availableLanguages: LanguageOption[];
  dictionary: TranslationDictionary;
  t: (key: string, fallback?: string) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
