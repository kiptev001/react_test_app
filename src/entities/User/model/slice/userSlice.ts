import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { IUser, UserSchema } from '../types';
import { AUTH_TOKEN_KEY } from 'shared/consts/localStorage';

const initialState: UserSchema = {
  authData: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<IUser>) => {
      state.authData = action.payload;
    },
    initAuthData: state => {
      const user = JSON.parse(localStorage.getItem(AUTH_TOKEN_KEY));
      if (user) {
        state.authData = user;
      }
    },
    logout: state => {
      state.authData = null;
      localStorage.removeItem(AUTH_TOKEN_KEY);
    }
  }
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
