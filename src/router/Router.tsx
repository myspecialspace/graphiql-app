import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

export const AppRouter = () => {
  const user = true;
  return user ? <PrivateRoutes /> : <PublicRoutes />;
};
