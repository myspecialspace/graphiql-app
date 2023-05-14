import { configureStore } from '@reduxjs/toolkit';
import { mainSlice } from './slices/main';
import { authSlice } from './slices/auth';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import './auth-changes';

export const store = configureStore({
  reducer: {
    main: mainSlice.reducer,
    auth: authSlice.reducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
