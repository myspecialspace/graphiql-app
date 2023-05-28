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
      className="flex w-24 h-full rounded-md border-0 bg-transparent p-0 mb-6 text-xl text-grey-100 sm:text-gray-500 focus:ring-inset focus:outline-none sm:mr-6 cursor-pointer"
    >
      <option className="text-xl text-gray-500" value="en">
        English
      </option>
      <option className="text-xl text-gray-500" value="ru">
        Русский
      </option>
    </select>
  );
};
