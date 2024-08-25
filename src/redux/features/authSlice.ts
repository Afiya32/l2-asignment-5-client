/* eslint-disable @typescript-eslint/no-explicit-any */
// authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { deleteCookie, setCookie } from '../../utilis/cookies';

export interface AuthState {
  isAuthenticated: boolean;
  user: any | null;
  token: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers:{
    setCredentials(state, action: PayloadAction<{ user: any; token: string }>) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      setCookie('user', JSON.stringify(action.payload.user), 7);
      setCookie('token', action.payload.token, 7);
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      deleteCookie('user');
      deleteCookie('token');
    },
  },

});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
