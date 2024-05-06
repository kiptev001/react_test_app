import { createAsyncThunk } from '@reduxjs/toolkit';
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
  { rejectValue: string }
>('auth/authByUserName', async (authData, thunkApi) => {
  try {
    const response = await axios.post('http://localhost:8000/login', {
      authData
    });

    if (!response.data) {
      throw new Error();
    }

    thunkApi.dispatch(userActions.setAuthData(response.data as IUser));
    localStorage.setItem(AUTH_TOKEN_KEY, JSON.stringify(response.data));

    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message as string);
  }
});

export { authByUsername };
