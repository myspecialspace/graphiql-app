import { User } from '@/@types/user';
import { auth } from '@/firebase/config';
import { getAccessToken, getRefreshToken } from '@/helpers/local-storage';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export type RegisterData = {
  email: string;
  password: string;
};
export const register = createAsyncThunk(
  'user/register',
  async (data: RegisterData) => {
    const result = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    const token = await result.user.getIdToken();
    const user: User = {
      uid: result.user.uid,
      displayName: result.user.displayName,
      email: result.user.email!,
      photoURL: result.user.photoURL!,
    };
    const refreshToken = result.user.refreshToken;

    return {
      user,
      token,
      refreshToken,
    };
  }
);

interface State {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null!,
    accessToken: getAccessToken(),
    refreshToken: getRefreshToken(),
  } as State,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.refreshToken = payload.refreshToken;
      state.accessToken = payload.token;
    });
  },
});
