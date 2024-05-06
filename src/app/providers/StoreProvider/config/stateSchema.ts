import type { counterSchema } from 'entities/Counter/index';
import type { UserSchema } from 'entities/User';
import type { LoginSchema } from 'features/AuthByUsername/model/types/loginSchema';

export interface stateSchema {
  counter: counterSchema;
  user: UserSchema;
  login?: LoginSchema;
}
