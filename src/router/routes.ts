import { Route } from '@/@types/common';
import { MAIN_ROUTE, SIGNIN_ROUTE, SIGNUP_ROUTE } from '@/helpers/constants';
import { MainPage } from '@/pages/Main/Main';
import { NotFoundPage } from '@/pages/NotFound/NotFound';
import { SigninPage } from '@/pages/Signin/Signin';
import { SignupPage } from '@/pages/Signup/Signup';
import { WelcomePage } from '@/pages/Welcome/Welcome';

export const publicRoutes: Route[] = [
  {
    path: SIGNIN_ROUTE,
    Component: SigninPage,
  },
  {
    path: SIGNUP_ROUTE,
    Component: SignupPage,
  },
];

export const privateRoutes: Route[] = [
  {
    path: MAIN_ROUTE,
    Component: MainPage,
  },
];

export const basicRoutes: Route[] = [
  {
    path: '',
    Component: WelcomePage,
  },
  {
    path: '*',
    Component: NotFoundPage,
  },
];
