import { IAuthState, IResponseLogin, Role } from '@/types/auth';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: IAuthState = {
  token: '',
  user: {},
  role: Role.GUEST,
  roles: [Role.GUEST],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<IResponseLogin>) => {
      if (action?.payload?.access_token) {
        state.token = action.payload.access_token;
        state.user = action.payload.user;
      }
    },
    clearAuthState: state => {
      state.token = '';
      state.roles = [Role.GUEST];
    },
  },
});

export const { setAuthState, clearAuthState } = authSlice.actions;
export const authReducer = authSlice.reducer;
