import { createSlice } from '@reduxjs/toolkit';
import type { UserSchema } from '../types';

const initialState: UserSchema = {
  authData: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;