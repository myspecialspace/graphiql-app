import { firebaseAuth } from '@/firebase/config';
import { store } from './store';
import { authSlice } from './slices/auth';
import { setLoggedIn } from '@/helpers/local-storage';
//подписываемся на изменения firebaseAuth
firebaseAuth.onAuthStateChanged((userData) => {
  //есть ли пользовательские данные - залогинен юзер или нет
  const isLoggedIn = !!userData;
  // сохраняем это значение(флажок) в локальное хранилище => нужно ли ждать авторизации или не нужно
  setLoggedIn(isLoggedIn);
  // кидаю флажок в редакс
  store.dispatch(authSlice.actions.setIsLoggedIn(isLoggedIn));
});
