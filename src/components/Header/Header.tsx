import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { HeaderButton } from '../common/HeaderButton';
import { Link } from 'react-router-dom';

export const Header: FC = () => {
  const { t } = useTranslation();
  return (
    <header className="h-16 bg-slate-200 shrink-0 sticky top-0 left-0">
      <div className="flex flex-row items-center justify-between  h-full">
        <div className="logo px-4">
          <Link to="/">GraphiQL</Link>
        </div>
        <div className="flex px-4">
          <HeaderButton text={t('signIn')} path="/signin" />
          <HeaderButton text={t('signUp')} path="/signup" />
        </div>
      </div>
    </header>
  );
};
