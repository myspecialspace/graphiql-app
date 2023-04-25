// для авторизации - проверять есть авторизация и рисовать компанент, либо нет
// если компонент,то кэмел кейз
import { FC } from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  element: JSX.Element;
}

export const ProtectedRoute: FC<Props> = ({ element }) => {
  const user = {};

  if(!user) {
    return <Navigate to="/login" />
  }

  return element;
}