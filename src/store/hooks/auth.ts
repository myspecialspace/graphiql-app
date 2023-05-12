import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useAppSelector } from '../store';
import { firebaseAuth } from '@/firebase/config';
import { RequestStatus } from '@/@types/request-status';

type SignInData = {
  email: string;
  password: string;
};

type SignUpData = {
  email: string;
  password: string;
};

export const useAuth = () => {
  const state = useAppSelector((state) => state.auth);

  const signIn = (data: SignInData) =>
    signInWithEmailAndPassword(firebaseAuth, data.email, data.password);

  const signUp = (data: SignUpData) =>
    createUserWithEmailAndPassword(firebaseAuth, data.email, data.password);

  // const signOut = () => firebaseAuth.signOut();

  return {
    isLoggedIn: state.isLoggedIn,
    pending: state.status === RequestStatus.PENDING,
    signIn,
    signUp,
    // signOut,
  };
};
