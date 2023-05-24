import { FC } from 'react';
import { Notification } from './components/Notification/Notification';
import { AppRouter } from './router/Router';

export const App: FC = () => {
  return (
    <>
      <AppRouter />
      <Notification />
    </>
  );
};
