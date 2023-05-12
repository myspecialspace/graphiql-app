import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { HeaderButton } from '../common/HeaderButton';
import { Link } from 'react-router-dom';
import { useAuth } from '@/store/hooks/auth';

export const Header: FC = () => {
  const { t } = useTranslation();
  const auth = useAuth();

  const onLogout = () => {
    auth.signOut();
  };

  const getHeaderButtons = (): JSX.Element | null => {
    if (auth.pending) {
      return null;
    }

    if (auth.isLoggedIn) {
      return <HeaderButton text={t('signOut')} onClick={onLogout} />;
    } else {
      return (
        <>
          <HeaderButton text={t('signIn')} path="/signin" />
          <HeaderButton text={t('signUp')} path="/signup" />
        </>
      );
    }
  };

  return (
    <header className="h-16 bg-slate-200 shrink-0 sticky top-0 left-0">
      <div className="flex flex-row items-center justify-between  h-full">
        <div className="logo px-4">
          <Link to="/">GraphiQL</Link>
        </div>
        <div className="flex px-4">{getHeaderButtons()}</div>
      </div>
    </header>
  );
};
