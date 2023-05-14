import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const SelectLanguage: FC = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    localStorage.setItem('lang', lng);
    i18n.changeLanguage(lng);
  };

  return (
    <select
      name="language"
      id="language"
      defaultValue={localStorage.getItem('lang') || 'English'}
      onChange={(e) => changeLanguage(e.target.value)}
      className="h-11 w-36 rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none sm:text-sm"
    >
      <option className="h-10 w-full" value="en">
        {t('en')}
      </option>
      <option className="h-10 w-full" value="ru">
        {t('ru')}
      </option>
    </select>
  );
};
