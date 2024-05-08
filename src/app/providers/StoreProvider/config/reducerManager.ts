/* eslint-disable @typescript-eslint/no-dynamic-delete */
import {
  type ReducersMapObject,
  combineReducers,
  type AnyAction,
  type Reducer,
  type CombinedState,
  type EnhancedStore
} from '@reduxjs/toolkit';
import { type stateSchemaKey, type stateSchema } from './stateSchema';

export interface reducerManager {
  getReducerMap: () => Record<string, Reducer>;
  reduce: (state: stateSchema, action: AnyAction) => CombinedState<stateSchema>;
  add: (key: stateSchemaKey, reducer: Reducer) => void;
  remove: (key: stateSchemaKey) => void;
}

export interface storeWithManager extends EnhancedStore<stateSchema> {
  reducerManager?: reducerManager;
}

export function createReducerManager(
  initialReducers: ReducersMapObject<stateSchema>
): reducerManager {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: stateSchemaKey[] = [];

  return {
    getReducerMap: () => reducers,

    reduce: (state: stateSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        for (const key of keysToRemove) {
          delete state[key];
        }
        keysToRemove = [];
      }

      return combinedReducer(state, action);
    },

    add: (key: stateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }

      reducers[key] = reducer;

      combinedReducer = combineReducers(reducers);
    },

    remove: (key: stateSchemaKey) => {
      if (!key || !reducers[key]) {
        return;
      }

      delete reducers[key];

      keysToRemove.push(key);

      combinedReducer = combineReducers(reducers);
    }
  };
}

// const staticReducers = {
//   users: usersReducer,
//   posts: postsReducer
// };

// export function configureStore(initialState) {
//   const reducerManager = createReducerManager(staticReducers);

//   const store = createStore(reducerManager.reduce, initialState);

//   store.reducerManager = reducerManager;
// }
