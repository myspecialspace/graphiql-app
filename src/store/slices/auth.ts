import { RequestStatus } from '@/@types/request-status';
import * as ls from '@/helpers/local-storage';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface State {
  isLoggedIn: boolean;
  status: RequestStatus;
}
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: ls.getLoggedIn() ? RequestStatus.PENDING : RequestStatus.INITIAL,
    isLoggedIn: false,
  } as State,
  reducers: {
    setIsLoggedIn(state, { payload }: PayloadAction<boolean>) {
      state.isLoggedIn = payload;
      state.status = RequestStatus.SUCCESS;
    },
  },
});
