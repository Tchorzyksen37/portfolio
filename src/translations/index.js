import { useLanguage } from '../context/LanguageContext';
import en from './en.json';
import pl from './pl.json';

const translations = { en, pl };

export const useTranslation = (namespace) => {
  const { language } = useLanguage();
  return translations[language][namespace];
};
