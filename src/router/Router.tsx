import { MainPage } from '@/pages/Main/Main';
import { SigninPage } from '@/pages/Signin/Signin';
import { SignupPage } from '@/pages/Signup/Signup';
import { WelcomePage } from '@/pages/Welcome/Welcome';
import { Route, Routes } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="welcome" element={<WelcomePage />}></Route>
      <Route path="main" element={<MainPage />}></Route>
      <Route path="signin" element={<SigninPage />}></Route>
      <Route path="signup" element={<SignupPage />}></Route>
    </Routes>
  );
};
