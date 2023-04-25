import { configureStore } from '@reduxjs/toolkit';
import { mainSlice } from './slices/main';

export const store = configureStore({
  reducer: {
    main: mainSlice.reducer,
  },
});
