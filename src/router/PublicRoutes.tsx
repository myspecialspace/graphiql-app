import { useRoutes } from 'react-router-dom';
import { basicRoutes, publicRoutes } from './routes';

const PrivateRoutes = () => {
  const routes = useRoutes([...publicRoutes, ...basicRoutes]);
  return routes;
};

export default PrivateRoutes;
