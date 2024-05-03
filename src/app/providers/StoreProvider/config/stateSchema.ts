import type { counterSchema } from 'entities/Counter/index';
import type { UserSchema } from 'entities/User';

export interface stateSchema {
  counter: counterSchema;
  user: UserSchema;
}
