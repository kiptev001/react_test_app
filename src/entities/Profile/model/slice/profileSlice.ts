import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { Profile, ProfileSchema } from '../types';
import { fetchProfileData } from '../services/fetchProfileData';

const initialState: ProfileSchema = {
  isLoading: false,
  readonly: true
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProfileData.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchProfileData.fulfilled,
      (state, action: PayloadAction<Profile[]>) => {
        state.isLoading = false;
        state.data = action.payload[0];
      }
    );
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
