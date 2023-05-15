import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import * as ls from '@/helpers/local-storage';

export const SelectLanguage: FC = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    ls.setLang(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <select
      name="language"
      id="language"
      defaultValue={ls.getLang() || 'en'}
      onChange={(e) => changeLanguage(e.target.value)}
      className="flex h-full rounded-md border-0 bg-transparent p-0 text-xl text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none sm:mr-6"
    >
      <option value="en">English</option>
      <option value="ru">Русский</option>
    </select>
  );
};
