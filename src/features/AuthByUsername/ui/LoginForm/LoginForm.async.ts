import { type FC, lazy } from 'react';
import { type ILoginFormProps } from './LoginForm';

const LoginFormAsync = lazy<FC<ILoginFormProps>>(async () => {
  return await import('./LoginForm');
});

export { LoginFormAsync };
