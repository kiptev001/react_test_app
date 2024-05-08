import { configureStore } from '@reduxjs/toolkit';
import type { stateSchema } from './stateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';

export function createReduxStore(initialState?: stateSchema) {
  const rootReducer = {
    counter: counterReducer,
    user: userReducer
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore<stateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState
  });
  // @ts-expect-error type
  store.reducerManager = reducerManager;

  return store;
}
