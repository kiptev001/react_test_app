import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import type { Profile } from '../types';
import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
const fetchProfileData = createAsyncThunk<Profile[], void, ThunkConfig<string>>(
  'fetchProfileData',
  async (_, { rejectWithValue, extra }) => {
    try {
      const response = await extra.api.get<Profile[]>('/profile');
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) || error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);

export { fetchProfileData };
