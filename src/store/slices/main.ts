import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const mainSlice = createSlice({
  name: 'main',
  initialState: {
    url: 'https://countries.trevorblades.com',
    isDocsOpen: false,
  },
  reducers: {
    setUrl: (state, { payload }: PayloadAction<string>) => {
      state.url = payload;
    },
    setIsDocsOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.isDocsOpen = payload;
    },
  },
});
