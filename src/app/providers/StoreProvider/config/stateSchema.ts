import { type EnhancedStore } from '@reduxjs/toolkit';
import type { counterSchema } from 'entities/Counter/index';
import type { UserSchema } from 'entities/User';
import type { LoginSchema } from 'features/AuthByUsername/model/types/loginSchema';
import { type reducerManager } from './reducerManager';
import { type ProfileSchema } from 'entities/Profile';
import type { AxiosInstance } from 'axios';
import type { To, NavigateOptions } from 'react-router-dom';

export interface stateSchema {
  counter: counterSchema;
  user: UserSchema;
  login?: LoginSchema;
  profile?: ProfileSchema;
}

export type stateSchemaKey = keyof stateSchema;

export interface StoreWithManager extends EnhancedStore<stateSchema> {
  reducerManager?: reducerManager;
}

export interface ThunkExtra {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtra;
}
