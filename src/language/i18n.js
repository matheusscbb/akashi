import i18n from "i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";


i18n
  .use(Backend) // to see /public/locales
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector) // pass the i18n instance to react-i18next.
  .init({
    fallbackLng: 'en',
    load: 'currentOnly',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;