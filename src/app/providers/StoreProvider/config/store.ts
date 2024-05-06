import { configureStore } from '@reduxjs/toolkit';
import type { stateSchema } from './stateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername/index';

export function createReduxStore(initialState?: stateSchema) {
  return configureStore<stateSchema>({
    reducer: {
      counter: counterReducer,
      user: userReducer,
      login: loginReducer
    },
    devTools: __IS_DEV__,
    preloadedState: initialState
  });
}
