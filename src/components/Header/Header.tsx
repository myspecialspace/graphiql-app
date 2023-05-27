import { FC, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { HeaderButton } from '../common/HeaderButton';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/store/hooks/auth';
import { SelectLanguage } from '../common/SelectLanguage';
import { useResponsive } from '@/hooks/responsive';
import { slide as Menu } from 'react-burger-menu';
import { burgerStyles } from './burger-styles';
import burgerIcon from '@/assets/icons/burger.svg';
import logoIcon from '@/assets/icons/logo.svg';
import { SIGNIN_ROUTE, SIGNUP_ROUTE } from '@/helpers/constants';

export const Header: FC = () => {
  const { t } = useTranslation();
  const auth = useAuth();
  const location = useLocation();
  const { isMobile } = useResponsive();
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    const windowScrollTop = window.scrollY;
    windowScrollTop > 10 ? setSticky(true) : setSticky(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onLogout = () => {
    auth.signOut();
  };

  const getHeaderButtons = (): JSX.Element | null => {
    if (auth.pending) {
      return null;
    }

    if (auth.isLoggedIn) {
      const isWelcomePage = location.pathname === '/';

      return (
        <>
          <SelectLanguage />
          {isWelcomePage && <HeaderButton text={t('goToMain')} path="/main" />}
          <HeaderButton text={t('signOut')} onClick={onLogout} />
        </>
      );
    } else {
      const isSigninPage = location.pathname === SIGNIN_ROUTE;
      const isSignupPage = location.pathname === SIGNUP_ROUTE;
      return (
        <>
          <SelectLanguage />
          {!isSigninPage && <HeaderButton text={t('signIn')} path="/signin" />}
          {!isSignupPage && <HeaderButton text={t('signUp')} path="/signup" />}
        </>
      );
    }
  };

  const getBurger = (): JSX.Element => {
    return (
      <>
        <Menu
          isOpen={isBurgerOpen}
          right
          styles={burgerStyles}
          onStateChange={({ isOpen }) => setIsBurgerOpen(isOpen)}
        >
          <div>
            <div className="h-full flex flex-col">{getHeaderButtons()}</div>
          </div>
        </Menu>
      </>
    );
  };

  return (
    <>
      <header
        className={
          sticky
            ? 'h-16 bg-purple-100 shadow-lg shadow-gray-500/50 py-1 shrink-0 sticky top-0 left-0 z-10'
            : 'h-16 bg-gray-100 shrink-0 sticky top-0 left-0 z-10'
        }
        onScroll={handleScroll}
      >
        <div className="flex flex-row items-center justify-between h-full">
          <div className="logo px-4 h-full flex items-center">
            <Link to="/">
              <img className="block pt-2" src={logoIcon} alt="logo" />
            </Link>
          </div>
          {!isMobile && (
            <div className="flex px-4 h-full">{getHeaderButtons()}</div>
          )}
          {isMobile && (
            <button
              className="flex mr-4 h-10"
              onClick={() => setIsBurgerOpen(!isBurgerOpen)}
            >
              <img className="h-full" src={burgerIcon} alt="burger" />
            </button>
          )}
        </div>
      </header>
      {isMobile && getBurger()}
    </>
  );
};
