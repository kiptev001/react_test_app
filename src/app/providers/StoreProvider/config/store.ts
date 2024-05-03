import { configureStore } from '@reduxjs/toolkit';
import type { stateSchema } from './stateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';

export function createReduxStore(initialState?: stateSchema) {
  return configureStore<stateSchema>({
    reducer: {
      counter: counterReducer,
      user: userReducer
    },
    devTools: __IS_DEV__,
    preloadedState: initialState
  });
}
