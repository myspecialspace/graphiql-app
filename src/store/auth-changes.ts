import { firebaseAuth } from '@/firebase/config';
import { store } from './store';
import { authSlice } from './slices/auth';
import { setLoggedIn } from '@/helpers/local-storage';

firebaseAuth.onAuthStateChanged((userData) => {
  const isLoggedIn = !!userData;

  setLoggedIn(isLoggedIn);

  store.dispatch(authSlice.actions.setIsLoggedIn(isLoggedIn));
});
