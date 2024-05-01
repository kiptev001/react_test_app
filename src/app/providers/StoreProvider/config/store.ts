import { configureStore } from '@reduxjs/toolkit';
import type { stateSchema } from './stateSchema';
import { counterReducer } from 'entities/Counter';

export function createReduxStore(initialState?: stateSchema) {
  return configureStore<stateSchema>({
    reducer: {
      counter: counterReducer
    },
    devTools: __IS_DEV__,
    preloadedState: initialState
  });
}
