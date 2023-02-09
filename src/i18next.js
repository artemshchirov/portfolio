import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        about__role: 'Full Stack Developer',
      },
    },
    ru: {
      translation: {
        about__role: 'Веб разработчик',
      },
    },
  },
  lng: 'en',
});

export default i18next;
