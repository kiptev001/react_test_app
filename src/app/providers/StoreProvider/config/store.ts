import {
  type ReducersMapObject,
  configureStore,
  type CombinedState,
  type Reducer
} from '@reduxjs/toolkit';
import type { ThunkExtra, stateSchema } from './stateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';
import { $api } from 'shared/api/api';
import type { NavigateOptions, To } from 'react-router';

export function createReduxStore(
  initialState?: stateSchema,
  navigate?: (to: To, options?: NavigateOptions) => void
) {
  const rootReducer: ReducersMapObject<stateSchema> = {
    counter: counterReducer,
    user: userReducer
  };

  const reducerManager = createReducerManager(rootReducer);

  const thunkExtraArg: ThunkExtra = { api: $api, navigate };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<stateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: { extraArgument: thunkExtraArg }
      })
  });
  // @ts-expect-error type
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
