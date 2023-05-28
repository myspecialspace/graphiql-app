import { MAIN_ROUTE, SIGNIN_ROUTE, SIGNUP_ROUTE } from '@/helpers/constants';
import { MainPage } from '@/pages/Main/Main';
import { NotFoundPage } from '@/pages/NotFound/NotFound';
import { WelcomePage } from '@/pages/Welcome/Welcome';
import { Navigate, Route, Routes } from 'react-router-dom';

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path={MAIN_ROUTE} element={<MainPage />} />
      <Route
        path={SIGNUP_ROUTE}
        element={<Navigate to={MAIN_ROUTE} replace />}
      />
      <Route
        path={SIGNIN_ROUTE}
        element={<Navigate to={MAIN_ROUTE} replace />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default PrivateRoutes;
