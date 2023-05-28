import Loader from '@/components/Loader/Loader';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import { useAuth } from '@/store/hooks/auth';

export const AppRouter = () => {
  const auth = useAuth();

  if (auth.pending) {
    return <Loader />;
  }

  return auth.isLoggedIn ? <PrivateRoutes /> : <PublicRoutes />;
};
