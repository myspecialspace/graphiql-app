import { useRoutes } from 'react-router-dom';
import { basicRoutes, privateRoutes } from './routes';

const PrivateRoutes = () => {
  const routes = useRoutes([...privateRoutes, ...basicRoutes]);
  return routes;
};

export default PrivateRoutes;
