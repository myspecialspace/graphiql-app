import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

export const AppRouter = () => {
  const user = false;
  return user ? <PrivateRoutes /> : <PublicRoutes />;
};
