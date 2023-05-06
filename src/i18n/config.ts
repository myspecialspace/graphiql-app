import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as en from './en.json';
import * as ru from './ru.json';

export const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
};

i18next.use(initReactI18next).init({
  lng: 'ru',
  debug: true,
  resources,
});
