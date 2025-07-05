// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from '@/languages/es/translation.json';
import en from '@/languages/en/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
  },
  lng: 'en', // idioma por defecto
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
