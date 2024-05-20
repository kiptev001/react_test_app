import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider/config/stateSchema';
import axios from 'axios';
import { userActions, type IUser } from 'entities/User';
import { AUTH_TOKEN_KEY } from 'shared/consts/localStorage';

interface authByUsernameProps {
  username: string;
  password: string;
}

const authByUsername = createAsyncThunk<
  IUser,
  authByUsernameProps,
  ThunkConfig<string>
>(
  'auth/authByUserName',
  async (authData, { dispatch, rejectWithValue, extra }) => {
    try {
      const response = await extra.api.post('/login', {
        authData
      });

      if (!response.data) {
        throw new Error();
      }

      dispatch(userActions.setAuthData(response.data as IUser));
      localStorage.setItem(AUTH_TOKEN_KEY, JSON.stringify(response.data));

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export { authByUsername };
