import { createSlice } from '@reduxjs/toolkit';
import type { ProfileSchema } from '../types';

const initialState: ProfileSchema = {
  isLoading: false
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {}
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;