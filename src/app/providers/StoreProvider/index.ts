import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore } from './config/store';
import type { AppDispatch } from './config/store';
import type { ThunkConfig, stateSchema } from './config/stateSchema';

export {
  StoreProvider,
  createReduxStore,
  type AppDispatch,
  type ThunkConfig,
  type stateSchema
};
