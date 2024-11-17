import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../Locales/en.json";
import fr from "../Locales/fr.json";

i18n
  .use(initReactI18next) // Connects i18next with React
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language if the selected one is not available
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
