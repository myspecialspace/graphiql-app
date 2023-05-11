import { configureStore } from '@reduxjs/toolkit';
import { mainSlice } from './slices/main';
import { userSlice } from './slices/user';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    main: mainSlice.reducer,
    user: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
