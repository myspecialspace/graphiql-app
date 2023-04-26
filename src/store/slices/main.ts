import { createSlice } from '@reduxjs/toolkit';

export const mainSlice = createSlice({
  name: 'main',
  initialState: {
    data: null,
  },
  reducers: {
    setData: (state, { payload }) => {
      state.data = payload;
    },
  },
});
