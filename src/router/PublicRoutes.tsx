import { SIGNIN_ROUTE, SIGNUP_ROUTE } from '@/helpers/constants';
import { NotFoundPage } from '@/pages/NotFound/NotFound';
import { SigninPage } from '@/pages/Signin/Signin';
import { SignupPage } from '@/pages/Signup/Signup';
import { WelcomePage } from '@/pages/Welcome/Welcome';
import { Route, Routes } from 'react-router-dom';

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<WelcomePage />} />
      <Route path={SIGNUP_ROUTE} element={<SignupPage />} />
      <Route path={SIGNIN_ROUTE} element={<SigninPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default PrivateRoutes;
