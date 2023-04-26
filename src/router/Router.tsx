import { MainPage } from '@/pages/Main/Main';
import { NotFoundPage } from '@/pages/NotFound/NotFound';
import { SigninPage } from '@/pages/Signin/Signin';
import { SignupPage } from '@/pages/Signup/Signup';
import { WelcomePage } from '@/pages/Welcome/Welcome';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="" element={<Navigate to="welcome" />}></Route>
      <Route path="welcome" element={<WelcomePage />}></Route>
      <Route
        path="main"
        element={<ProtectedRoute element={<MainPage />}></ProtectedRoute>}
      ></Route>
      <Route path="signin" element={<SigninPage />}></Route>
      <Route path="signup" element={<SignupPage />}></Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
};
