import { en } from './en';
import { hi } from './hi';
import { mr } from './mr';
import type { Language, LanguageOption, TranslationDictionary } from './types';

export type * from './types';

export const translations: Record<Language, TranslationDictionary> = {
  en,
  hi,
  mr,
};

export const DEFAULT_LANGUAGE: Language = 'en';

export const AVAILABLE_LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', nativeLabel: 'English' },
  { code: 'hi', label: 'Hindi', nativeLabel: 'हिंदी' },
  { code: 'mr', label: 'Marathi', nativeLabel: 'मराठी' },
];
